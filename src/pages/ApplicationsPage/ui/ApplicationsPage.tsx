import style from "./ApplicationsPage.module.css";
import { useState } from "react";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  // sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";

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
    const email = "marina.kim@catbytes.io";
    const password = "Manushka8$";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then(
          (token) => {
            console.log("Firebase token", token);
            const config = {
              method: "post",
              url: `${import.meta.env.VITE_DEVAPI}users/login`,
              // url: `http://localhost:8080/users/login`,
              headers: {
                token: token,
              },
              withCredentials: true,
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

  // const [comment, setComment] = useState("");

  const approveApplication = () => {
    // fetch("http://localhost:8080/applications", {
    const config = {
      url: `${import.meta.env.VITE_DEVAPI}applications`,
      method: "GET",
      withCredentials: true,
    };
    axios
      .request(config)
      .then((response) => console.log("response", response))
      // .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    // const config = {
    //   method: "get",
    //   credentials: "include",
    //   maxBodyLength: Infinity,
    //   url: "https://devapi.catbytes.io/applications",
    //   headers: {
    //     "Content-Type": "application/json",
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
    console.log("rejected");
    // try {
    //   const data = JSON.stringify({
    //     status: "rejected",
    //     comment: comment,
    //     user_id: user.user.id,
    //   });

    //   let config = {
    //     method: "put",
    //     maxBodyLength: Infinity,
    //     url: `${import.meta.env.VITE_DEVAPI}applications/26`,
    //     headers: {
    //       userUID: "P4OUBdaGLHeNVHh16HbD0UFzZCq2",
    //       "Content-Type": "application/json",
    //       Cookie: "userUID=P4OUBdaGLHeNVHh16HbD0UFzZCq2",
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
