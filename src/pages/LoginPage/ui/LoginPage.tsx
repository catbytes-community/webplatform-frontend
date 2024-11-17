import style from "./LoginPage.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebaseConfig.js";

export function LoginPage() {
  const email = "marina.kim@catbytes.io";
  const password = "testpassword";
  // post(/create-application) > name, last name, about me... >>> send as part of application
  // when mentors review this application > Approve or Reject
  // auth.currentUser > email, 

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode, errorMessage);
    });
  }
 
  // return <div className={style.main}>LoginPage
  //   <h1>LoginPage</h1>
  //   <button onClick={registerUser}>Register User</button>
  // </div>;

  return (
    <div className={style.main}>
      <h1>LoginPage</h1>
      <button onClick={registerUser}>Register User</button>
    </div>
  )
}
