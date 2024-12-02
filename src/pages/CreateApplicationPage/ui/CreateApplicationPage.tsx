import style from './CreateApplicationPage.module.css';
import React, { useState } from 'react';
// import { auth } from '/firebaseConfig';
import firebaseConfig from '../../../../firebaseConfig';
const { auth } = firebaseConfig;
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Button, { ButtonsEnum } from '../../../shared/ui/Button/Button';

export const CreateApplicationPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRegistering, setIsRegistering] = useState<boolean>(true);

  const handleAuth = async (): Promise<void> => {
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert(`User registered: ${userCredential.user.email}`);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert(`User logged in: ${userCredential.user.email}`);
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      {/* <h1>{isRegistering ? 'Register' : 'Login'}</h1> */}
      <h1 className={style.title}>JOIN US</h1>
      <div>
        <input
          className={style.input}
          type="name"
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
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
      <button onClick={handleAuth}>
        {isRegistering ? 'Register' : 'Login'}
      </button>
      <Button
        label="Tertiary Button"
        btnType={ButtonsEnum.TERTIARY}
        onClick={() => setIsRegistering(!isRegistering)}
      />
      <Button
        label="Register"
        btnType={ButtonsEnum.SECONDARY}
        onClick={() => setIsRegistering(!isRegistering)}
      />
      <Button
        label="Log In"
        btnType={ButtonsEnum.PRIMARY}
        onClick={() => setIsRegistering(!isRegistering)}
      />
      <p>
        {isRegistering ? 'Already have an account?' : 'Need to register?'}{' '}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

// export function CreateApplicationPage() {
//   return <div className={style.main}>CreateApplicationPage</div>;
// }
