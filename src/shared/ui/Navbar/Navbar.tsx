import Button from "../Button/Button";
import logo from "../../assets/images/logopurple.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function testFunction() {
    console.log("user click join us");
  }
  return (
    <div className="flex items-center justify-between w-full p-5 gap-30 pl-10 pr-5 font-[Monserrat]">
      <div className="w-24" onClick={() => navigate("/")}>
        <img src={logo} />
      </div>

      <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5">
        <nav className="flex items-center gap-6 -ml-96">
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/mentors")}>Mentorship</p>
          <p onClick={() => navigate("/projects")}>Collaboration</p>
          <p onClick={() => navigate("/study_groups")}>Study Buddy</p>
          <p onClick={() => navigate("/community_resources")}>Resources</p>
          <p onClick={() => navigate("/pomodoro")}>Tools</p>
          <p>FAQ</p>
        </nav>
      </div>

      <div className="flex justify-between gap-10 font-[Monserrat]">
        <Button label="JOIN US" btnType="primary_btn" onClick={testFunction} />

        <Button
          label="SING IN"
          btnType="secondary_btn"
          onClick={testFunction}
        />
      </div>
    </div>
  );
}
