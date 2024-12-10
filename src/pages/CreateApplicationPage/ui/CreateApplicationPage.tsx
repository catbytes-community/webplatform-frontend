import style from './CreateApplicationPage.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import Button, { ButtonsEnum } from '../../../shared/ui/Button/Button';

export const CreateApplicationPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  //uncommit if need message in ui
  // const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const data = {
      name,
      about,
      email,
      video_link: link,
      discord_nickname: discord,
    };

    try {
      setError(null);
      //uncommit if need message in ui
      // setSuccessMessage(null);

      // send data on server
      const response = await axios.post(
        'https://devapi.catbytes.io/applications',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // if response server sucsessful
      alert('Application submitted successfully!');
      console.log('Response:', response.data);

      // clean form
      setName('');
      setEmail('');
      setAbout('');
      setLink('');
      setDiscord('');
    } catch (error: any) {
      // catch errors
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.error ||
            'An error occurred while submitting the form.'
        );
      } else {
        setError('An unexpected error occurred.');
      }

      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 className={style.title}>JOIN US</h1>
      {error && <p className={style.error}>{error}</p>}
      {/* //uncommit if need message in ui 
      {successMessage && <p className={style.success}>{successMessage}</p>}
      */}
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <input
            className={style.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div>
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <input
            className={style.input}
            type="text"
            placeholder="About"
            value={about}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAbout(e.target.value)
            }
          />
        </div>
        <div>
          <input
            className={style.input}
            type="text"
            placeholder="Link to video"
            value={link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLink(e.target.value)
            }
          />
        </div>
        <div>
          <input
            className={style.input}
            type="text"
            placeholder="Discord nickname"
            value={discord}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDiscord(e.target.value)
            }
          />
        </div>
        <Button
          label="Submit"
          btnType={ButtonsEnum.PRIMARY}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
