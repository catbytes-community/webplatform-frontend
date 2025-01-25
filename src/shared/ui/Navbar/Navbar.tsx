import Button from "../Button/Button";
import logo from "../../assets/images/logopurple.webp";
import { BecomeMentorButton } from "../../../features/Mentor/BecomeMentorButton";

export default function Navbar() {
  const isAuthorized = true;
  function testFunction() {
    console.log("user click join us");
  }
  return (
    <div className="flex items-center justify-between w-full p-5 gap-30 pl-10 pr-5 font-[Monserrat]">
      <div className="w-24">
        <img src={logo} />
      </div>

      <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5">
        <nav className="flex items-center gap-6 -ml-96">
          <p>
            <a href="#">HOME</a>
          </p>
          <p>
            <a href="#">Mentorship</a>
          </p>
          <p>
            <a href="#">Collaboration</a>
          </p>
          <p>
            <a href="#">Study Buddy</a>
          </p>
          <p>
            <a href="#">Resources</a>
          </p>
          <p>
            <a href="#">Tools</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
        </nav>
      </div>

      <div className="flex justify-between gap-10 font-[Monserrat]">
        {isAuthorized ? (
          <BecomeMentorButton />
        ) : (
          <>
            <Button
              label="JOIN US"
              btnType="primary_btn"
              onClick={testFunction}
            />

            <Button
              label="SING IN"
              btnType="secondary_btn"
              onClick={testFunction}
            />
          </>
        )}
      </div>
    </div>
  );
}
