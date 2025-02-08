import style from './ApplicationsPage.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
// import auth from "../../../../firebaseConfig";

export const ApplicationsPage = () => {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  // const config = {
  //   method: "get",
  //   url: "https://devapi.catbytes.io/applications",
  //   withCredentials: true, // 🔥 This allows the browser to send cookies automatically
  //   headers: {
  //     userUID: "P4OUBdaGLHeNVHh16HbD0UFzZCq2", // ✅ Keep this if your API requires it
  //   },
  // };
  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  type User = {
    firebase_id: string;
    id: number;
    name: string;
    languages: string | null;
    image: string | null;
    email: string;
    about: string;
    created_at: string;
  };

  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    const auth = getAuth();
    const email = 'marina.kim@catbytes.io';
    const password = 'Manushka8$';
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.accessToken);
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://devapi.catbytes.io/users/login',
          headers: {
            token: user.accessToken,
          },
        };

            axios
              .request(config)
              .then((response) => {
                console.log("Logged in successfully", response.data.user);
                setUser(response?.data?.user);
              })
              .catch((error) => {
                console.log(error);
              });
          },
          (error) => {
            console.log(error);
          }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    // sendPasswordResetEmail(auth, email)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };

  const [comment, setComment] = useState('');

  const approveApplication = () => {
    console.log('approved');
    try {
      let data = JSON.stringify({
        status: 'approved',
        user_id: user.user.id,
      });

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_DEVAPI}applications/26`,
        headers: {
          userUID: 'P4OUBdaGLHeNVHh16HbD0UFzZCq2',
          'Content-Type': 'application/json',
          Cookie: 'userUID=P4OUBdaGLHeNVHh16HbD0UFzZCq2',
        },
        data: data,
      };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // try {
    //   const data = JSON.stringify({
    //     status: "approved",
    //     user_id: user?.firebase_id,
    //   });

    //   const config = {
    //     method: "put",
    //     maxBodyLength: Infinity,
    //     url: `${import.meta.env.VITE_DEVAPI}applications/26`,
    //     headers: {
    //       userUID: user?.firebase_id,
    //       "Content-Type": "application/json",
    //       Cookie: `userUID=${user?.firebase_id}`,
    //     },
    //     data: data,
    //   };

    //   axios
    //     .request(config)
    //     .then((response) => {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const rejectApplication = () => {
    console.log('rejected');
    try {
      let data = JSON.stringify({
        status: 'rejected',
        comment: comment,
        user_id: user.user.id,
      });

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_DEVAPI}applications/26`,
        headers: {
          userUID: 'P4OUBdaGLHeNVHh16HbD0UFzZCq2',
          'Content-Type': 'application/json',
          Cookie: 'userUID=P4OUBdaGLHeNVHh16HbD0UFzZCq2',
        },
        data: data,
      };

    //   axios
    //     .request(config)
    //     .then((response) => {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className={style.main}>
      <h1>Applications Page</h1>
      <button onClick={login} className="bg-teal-500 text-white rounded px-3">
        Login
      </button>
      <button
        onClick={approveApplication}
        className="bg-indigo-500 text-white rounded px-3"
      >
        Approve
      </button>
      <button
        onClick={rejectApplication}
        className="bg-pink-500 text-white rounded px-3"
      >
        Reject
      </button>
      {/* {applications?.map((application) => (
            <ApplicationBlock key={application.id} application={application} />
          ))} */}
    </div>
  );
};
