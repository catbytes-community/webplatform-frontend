import style from './CreateApplicationPage.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import Button, { ButtonsEnum } from '../../../shared/ui/Button/Button';
import Navbar from '../../../shared/ui/Navbar/Navbar';
import Alert from '../../../shared/ui/Alert/Alert';
import VideoUploader from './VideoUploader';

type PresignRequest = {
  objectKey: string;
  contentType: string;
  objectType: 'application_video' | string;
};
type PresignResponse = { url: string; filename: string };

const OBJECT_TYPE = 'application_video';
const PRESIGN_URL = 'https://devapi.catbytes.io/presigned-url'; // как в твоём uploader-е

// простая генерация UUID
const uuid = () =>
  crypto?.randomUUID?.() ??
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const CreateApplicationPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  // новое: файл и итоговый ключ после upload
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoKey, setVideoKey] = useState<string>('');

  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return /^[A-Za-z\s]+$/.test(value)
          ? ''
          : 'Name must contain only letters and spaces.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : "Please enter a valid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
      case 'about':
        return value.trim().length >= 10
          ? ''
          : 'About must be at least 10 characters long.';
      case 'link':
        // ССЫЛКА СТАЛА ОПЦИОНАЛЬНОЙ — валидируем только если не пусто
        if (!value.trim()) return '';
        return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-._~:/?#[\]@!$&'()*+,;=%]*)*$/.test(
          value.trim()
        )
          ? ''
          : 'Invalid video link. Valid link https://example.com';
      case 'discord':
        return /^(?=.{2,32}$)[a-zA-Z0-9._]+$/.test(value)
          ? ''
          : 'Discord username must be 2-32 characters long and can only contain letters, numbers, dots, and underscores.';
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    newErrors.name = validateField('name', name);
    newErrors.email = validateField('email', email);
    newErrors.about = validateField('about', about);
    newErrors.link = validateField('link', link);
    newErrors.discord = validateField('discord', discord);

    // Mandate either link OR file upload
    if (!link.trim() && !videoFile) {
      newErrors.video = 'Please provide a video link or attach a video file.';
    } else {
      // Clear any previous error if valid state is reached (either link or file present)
      newErrors.video = '';
    }

    // Filter out fields that are valid before checking if all are empty
    const hasErrors = Object.values(newErrors).some((e) => e !== '');

    // Update errors state and return validity
    setErrors(newErrors);
    return !hasErrors;
  };

  const handleBlur = (field: string, value: string): void => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const uploadFileIfNeeded = async (): Promise<string> => {
    if (!videoFile) return '';

    try {
      // 1) presign
      const body: PresignRequest = {
        objectKey: uuid(),
        contentType: videoFile.type || 'application/octet-stream',
        objectType: OBJECT_TYPE,
      };
      const { data } = await axios.post<PresignResponse>(PRESIGN_URL, body);
      const { url, filename } = data;
      if (!url || !filename) throw new Error('Invalid presign response');

      // 2) put в S3
      await axios.put(decodeURIComponent(url), videoFile, {
        headers: {
          'Content-Type': videoFile.type || 'application/octet-stream',
        },
      });

      return filename; // Return the S3 key
    } catch (e) {
      console.error('Video upload failed during presign or PUT:', e);
      // Re-throw or throw a more specific error to be caught in handleSubmit
      throw new Error('Failed to upload video file.');
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);

    // 1. Run validation
    if (!validateForm()) return;

    if (!agreeToTerms) {
      setError('You must agree to the Terms and Conditions.');
      return;
    }

    const data = {
      name,
      about,
      email,
      video_link: link,
      discord_nickname: discord,
    };

    try {
      setSuccessMessage(null);

      // 2. Upload file if present
      // videoS3Key will be the S3 key OR ''
      videoS3Key = await uploadFileIfNeeded();

      // 3. Determine final payload values
      if (videoS3Key) {
        // Case 1: File was uploaded successfully.
        // Send S3 key as filename, and clear any link the user might have provided.
        finalVideoFilename = videoS3Key;
        finalVideoLink = ''; // Prioritize file upload, clear link
      } else if (link.trim()) {
        // Case 2: Only Link was provided (and passed validation).
        // Send the link, and an empty string for the filename.
        finalVideoFilename = '';
        finalVideoLink = link.trim();
      }

      // The validation (validateForm) ensures that finalVideoFilename and finalVideoLink are NOT both empty.

      const payload = {
        name,
        about,
        email,
        video_link: finalVideoLink,
        video_filename: finalVideoFilename,
        discord_nickname: discord,
      };

      await axios.post(`${import.meta.env.VITE_DEVAPI}applications`, payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      setShowAlert(true);

      // очистка
      setName('');
      setEmail('');
      setAbout('');
      setLink('');
      setDiscord('');
      setAgreeToTerms(false);
      setVideoFile(null);
      setVideoKey(''); // Resetting key is fine
      setErrors({});
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // This catches the 500 from the final API call OR an Axios error from presign/PUT if not specifically caught
        setError(
          err.response?.data?.error ||
            'An error occurred while submitting the form. (Check console for details)'
        );
      } else if (err instanceof Error) {
        // Catches 'Failed to upload video file.' or 'Invalid presign response'
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <Navbar />
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          title="Application submitted!"
          subtitle="Thank you for your application. One of our mentors will review it shortly and you will receive a relevant email 😽"
        />
      )}
      <p className="font-bold font-montserrat w-80 m-auto my-10 text-center">
        Please complete the below form to apply for joining our community
      </p>

      <div className="flex flex-col items-center justify-center gap-5 w-80 m-auto">
        {error && <p className={style.error}>{error}</p>}
        {successMessage && <p className={style.success}>{successMessage}</p>}

        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  name: validateField('name', e.target.value),
                }));
              }}
            />
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>

          <div>
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => handleBlur('email', e.target.value)}
            />
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>

          <div>
            <input
              className={style.input}
              type="text"
              placeholder="About"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  about: validateField('about', e.target.value),
                }));
              }}
            />
            {errors.about && <p className={style.error}>{errors.about}</p>}
          </div>

          {/* VIDEO UPLOADER */}
          <VideoUploader
            onSelect={(f) => {
              setVideoFile(f);
              // Clear 'video' error immediately if a file is selected OR if the link has content
              if (f || link.trim()) {
                setErrors((prev) => ({ ...prev, video: '' }));
              }
              // Re-run validation on form state change to catch link/file conflict
              validateForm();
            }}
          />
          {errors.video && <p className={style.error}>{errors.video}</p>}

          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Link to video (optional if you attach a file)"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                // Clear 'video' error immediately if the link has content OR if a file is present
                if (e.target.value.trim() || videoFile) {
                  setErrors((prev) => ({ ...prev, video: '' }));
                }
                // Re-run validation on form state change to catch link/file conflict
                validateForm();
              }}
              onBlur={(e) => handleBlur('link', e.target.value)}
            />
            <p className="w-[290px] m-auto italic text-sm ">
              Please upload a short video introducing yourself and why you would
              like to join our community. <br />
              You can upload a video unlisted to YouTube and share the link with
              us.
            </p>
            {errors.link && <p className={style.error}>{errors.link}</p>}
          </div>

          <div>
            <input
              className={style.input}
              type="text"
              placeholder="Discord nickname"
              value={discord}
              onChange={(e) => {
                setDiscord(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  discord: validateField('discord', e.target.value),
                }));
              }}
            />
            <p className="w-[290px] m-auto italic text-sm ">
              You need a Discord account to be able to join our private Discord
              server.
            </p>
            {errors.discord && <p className={style.error}>{errors.discord}</p>}
          </div>

          <div className="mb-5 w-full p-2">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the{' '}
              <a href="/privacy_policy" target="_blank" className="underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="/terms_and_conditions"
                target="_blank"
                className="underline"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          <Button
            label="Submit"
            btnType={ButtonsEnum.PRIMARY}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};
