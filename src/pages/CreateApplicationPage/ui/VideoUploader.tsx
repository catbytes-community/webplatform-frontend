// React Component for Uploading - TypeScript
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios, { AxiosProgressEvent, AxiosError } from 'axios';

// --- UTILS (Генерация UUID v4) ---
const generateUUIDv4 = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// --- ИСПРАВЛЕННЫЕ ИНТЕРФЕЙСЫ И КОНСТАНТЫ ---

/**
 * Интерфейс для тела запроса на бэкенд (остается без изменений).
 */
interface PresignRequest {
  objectKey: string;
  contentType: string;
  objectType: 'application_video' | string;
}

/**
 * Интерфейс для ожидаемого ответа от бэкенда (ПЛОСКАЯ СТРУКТУРА).
 * Поля переименованы в 'url' и 'filename' согласно вашим логам.
 */
interface PresignResponse {
  url: string; // <-- ИСПРАВЛЕНО: раньше было uploadUrl
  filename: string; // <-- ИСПРАВЛЕНО: раньше было key
}

const OBJECT_TYPE = 'application_video';
const BACKEND_URL = 'https://devapi.catbytes.io/presigned-url';

// --- КОМПОНЕНТ ---

function VideoUploader(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // ... (handleFileChange остается без изменений)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log('Этап 1: Выбран новый файл');
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      console.log(
        `Файл: ${file.name}, Тип MIME: ${file.type}, Размер: ${file.size} байт`
      );
    } else {
      setSelectedFile(null);
      console.log('Файл не выбран.');
    }
  };

  const handleUpload = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!selectedFile) {
      console.warn('⚠️ Нет выбранного файла для загрузки. Операция отменена.');
      return;
    }

    const fileDetails = {
      contentType: selectedFile.type,
      objectKey: generateUUIDv4(),
      objectType: OBJECT_TYPE,
    };

    console.log('--- Начат процесс загрузки ---');
    console.log(`Сгенерирован ObjectKey (UUID): ${fileDetails.objectKey}`);
    console.log(`Используемый Content-Type: ${fileDetails.contentType}`);

    try {
      // 1. Запрос presigned URL от бэкенда
      console.log(`Этап 2: Отправка запроса на ${BACKEND_URL}...`);

      const postBody: PresignRequest = {
        objectKey: fileDetails.objectKey,
        contentType: fileDetails.contentType,
        objectType: fileDetails.objectType,
      };

      const response = await axios.post<PresignResponse>(BACKEND_URL, postBody);

      // !!! ИСПРАВЛЕНИЕ: Прямая деструктуризация с переименованием полей !!!
      const { url: uploadUrl, filename: key } = response.data;

      console.log('✅ Presigned URL успешно получен!', response);
      console.log(`URL для загрузки: ${uploadUrl.substring(0, 70)}...`); // <-- Теперь это не вызовет ошибку
      console.log(`Возвращенный S3 Key (filename): ${key}`);

      if (!uploadUrl || !key) {
        console.error('❌ Ошибка: Бэкенд не вернул uploadUrl или key.');
        throw new Error('Invalid response data from backend.');
      }

      // 2. Загрузка файла напрямую в S3 с использованием presigned URL
      console.log('Этап 3: Загрузка файла в S3...');

      const decodedUploadUrl = decodeURIComponent(uploadUrl);

      await axios.put(decodedUploadUrl, selectedFile, {
        headers: {
          'Content-Type': fileDetails.contentType,
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`🚀 Прогресс загрузки в S3: ${percentCompleted}%`);
          }
        },
      });

      console.log('✅ Файл успешно загружен в S3!');

      // 3. Финализация
      console.log(
        `Этап 4: Финализация: S3 Key (filename) "${key}" может быть сохранен в БД.`
      );

      console.log('--- Процесс завершен ---');
      setSelectedFile(null);
    } catch (error) {
      console.error('--- ❌ ОШИБКА ПРОЦЕССА ЗАГРУЗКИ ---');
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Ошибка HTTP-запроса:', axiosError.message);
        console.error(
          'Детали ошибки (ответ бэкенда/S3):',
          axiosError.response?.data
        );
        console.error('Статус:', axiosError.response?.status);
      } else {
        console.error('Непредвиденная ошибка:', error);
      }
    }
  };

  return (
    <div>
      <h3>Загрузка файла с Presigned URL (API Test)</h3>
      <input
        type="file"
        onChange={handleFileChange}
        // accept="video/*"
      />
      {selectedFile ? (
        <>
          <p>
            **Готов к загрузке:** **{selectedFile.name}**
            <br />
            *Тип:* `{selectedFile.type}`
          </p>
          <button
            onClick={handleUpload}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            🔥 Отправить запрос и загрузить файл
          </button>
        </>
      ) : (
        <p style={{ color: 'gray' }}>
          Пожалуйста, выберите файл для активации кнопки.
        </p>
      )}
    </div>
  );
}

export default VideoUploader;
