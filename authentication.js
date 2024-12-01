import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';

const auth = getAuth(app);

createUserWithEmailAndPassword(auth, 'user@example.com', 'password123')
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User signed up:', user);
  })
  .catch((error) => {
    console.error('Error signing up:', error);
  });
