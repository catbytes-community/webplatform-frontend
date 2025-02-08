import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../../../../firebaseConfig';

import Navbar from '../../../shared/ui/Navbar/Navbar';
import Button, { ButtonsEnum } from '../../../shared/ui/Button/Button';
import style from './LoginPage.module.css';

const auth = firebaseConfig.auth;

export function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      const response = await axios.post(
        `${import.meta.env.VITE_DEVAPI}users/login`,
        {},
        { headers: { token } }
      );

      localStorage.setItem('user', JSON.stringify(response.data));
      setError('');
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Axios error details:',
          error.response?.data || error.message
        );
        setError(error.response?.data?.message || 'Login request failed');
      } else {
        console.error('Login error:', error);
        setError(
          error instanceof Error ? error.message : 'An unknown error occurred'
        );
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email first.');
      return;
    }

    // Проверка валидности email
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError('Please enter a valid email.');
      return;
    }

    try {
      console.log(`Simulating password reset email to: ${email}`);
      // const response = await fetch(
      //   `${import.meta.env.VITE_DEVAPI}users/forgot-password`,
      //   {
      //     method: 'POST',
      //     credentials: 'include',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email }),
      //   }
      // );
      // if (!response.ok) throw new Error('Error sending reset email.');
      setError('Password reset email sent!');
    } catch (err) {
      console.error('Password reset error:', err);
      setError('Error sending reset email.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Navbar />
      <h1 className={style.title}>Sign In</h1>
      <form className={style.form} onSubmit={handleLogin}>
        <div>
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={style.error}>{error}</p>}
        <div>
          <Button
            label="Login"
            btnType={ButtonsEnum.PRIMARY}
            onClick={() => {}}
          />
        </div>
      </form>
      <button onClick={() => navigate('/create_application')}>
        Not a member? Apply here
      </button>
      <Button
        label="Forgot Password"
        btnType={ButtonsEnum.SECONDARY}
        onClick={handleForgotPassword}
      />
    </div>
  );
}
