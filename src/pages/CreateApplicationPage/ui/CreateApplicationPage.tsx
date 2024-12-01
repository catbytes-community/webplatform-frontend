import style from './CreateApplicationPage.module.css';
import React, { useState } from 'react';
// import { auth } from '/firebaseConfig';
import firebaseConfig from '../../../../firebaseConfig';
const { auth } = firebaseConfig;
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const CreateApplicationPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
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
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button onClick={handleAuth}>
        {isRegistering ? 'Register' : 'Login'}
      </button>
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
