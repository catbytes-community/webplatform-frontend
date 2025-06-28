import Navbar from "../../../shared/ui/Navbar/Navbar";
//import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { signOut } from "firebase/auth";
//import { auth } from "../../../firebaseConfig";
//import Cookies from "js-cookie";
//import { useNavigate } from "react-router-dom";

export default function MentorUserProfilePage() {
  // const { id } = useParams();
  // const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="p-10 flex flex-col gap-5 w-96 m-auto">
        <h1 className="font-bold text-xl text-center mb-5 mt-10">
          Mentor User Profile Page
        </h1>
        <p>
          <span className="font-bold font-montserrat">Name:</span>
        </p>
        <p>
          <span className="font-bold font-montserrat">Discord Nickname:</span>
        </p>
        <p>
          <span className="font-bold font-montserrat">Languages:</span>
        </p>
        <p>
          <span className="font-bold font-montserrat">Tags:</span>
        </p>
        <p>
          <span className="font-bold font-montserrat">
            Experience description:
          </span>
        </p>
      </div>
    </div>
  );
}
