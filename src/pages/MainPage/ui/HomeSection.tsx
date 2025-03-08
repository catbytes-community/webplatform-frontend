import style from "./MainPage.module.css";
import Button from "../../../shared/ui/Button/Button.tsx";
import paw from "../../../shared/assets/images/mdi_paw 1.svg";
import landing_mentor_icons from "../../../shared/assets/images/landing_mentor_icons.svg";
import announcement from "../../../shared/assets/images/Light-Orange-24.png";
import cat from "../../../shared/assets/images/cat.svg";
import ArrowRightIcon from "../../../shared/ui/icons/ArrowRightIcon.tsx";
import homeGroup from "../../../shared/assets/images/home_group.png";
import home_study_buddy from "../../../shared/assets/images/home_study_buddy.png";
import landing_projects_logged from "../../../shared/assets/images/landing_projects_logged.svg";
import { Link, useNavigate } from "react-router-dom";

export const HomeSection = () => {
  const navigate = useNavigate();
  function handleClickJoinUs() {
    navigate("/create_application");
  }

  const isLogged = true;

  return (
    <div className="flex justify-center px-10 py-3.5 overflow-hidden">
      <div className={`${style.main} lg:grid grid-cols-[1.6fr_0.8fr] gap-5`}>
        <div className="relative">
          <div
            className={`${style.cardShadow} ${style.container} lg:h-[508px]  
            pt-12 lg:py-20 px-9 rounded-3xl mt-12 lg:mb-40 relative`}
          >
            <div className="mb-12">
              <p className="text-3xl lg:text-5xl font-bold">
                Become a part of CatBytes
              </p>
              <p className="text-xl lg:text-2xl font-montserrat font-medium mt-5">
                Community for women in tech
              </p>
              <p className="font-montserrat mt-3.5 text-sm">
                We bring women together to support each other in achieving our
                career goals in tech industry. Join our private Discord server
              </p>
            </div>
            <Button
              label="JOIN US"
              btnType="primary_big_btn"
              onClick={handleClickJoinUs}
            />
            <img className={style.paw} src={paw} alt="Paw" />
          </div>
          <div
            className={`${style.cardShadow} ${style.announcementContainer}
             xl:min-w-[426px] rounded-3xl p-6 lg:pt-[27px] lg:pr-[29px] lg:pb-[2px] lg:pl-[52px]
             my-12 lg:absolute right-5 -bottom-14 xl:bottom-10`}
          >
            <p
              className={`font-semibold text-xl lg:text-2xl font-poppins ${
                isLogged ? "w-44" : ""
              } `}
            >
              View last announcements
            </p>
            <div className="flex items-end justify-between">
              <img
                className="relative z-30"
                src={isLogged ? landing_mentor_icons : announcement}
                alt="landing_mentor_icons"
              />
              <Link className="z-50" to="/">
                <div className="flex gap-2 mb-8">
                  <p className="underline font-montserrat text-sm lg:text-md font-bold text-gray-600">
                    Coming soon
                  </p>
                  <ArrowRightIcon />
                </div>
              </Link>
            </div>
            <img
              src={cat}
              alt="cat"
              className={`absolute -right-16  h-[300px] lg:h-[330px]
                ${
                  isLogged
                    ? "bottom-[128px] lg:bottom-[104px]"
                    : "bottom-[114px] lg:bottom-[88px]"
                }`}
            />
            <div className={`${style.blur} hidden lg:block`}></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className={`${style.cardShadow} ${style.container} flex flex-col p-6 rounded-3xl relative`}
          >
            <p className="text-xl lg:text-2xl font-semibold w-64 mb-6">
              Take part in projects and collaborations
            </p>
            <img
              className="w-56 self-center lg:self-start"
              src={isLogged ? landing_projects_logged : homeGroup}
              alt="Projects"
            />
            <Link className="self-end" to="/">
              <div className="flex gap-2 mb-2">
                <p className="underline text-sm lg:text-md font-montserrat font-bold text-gray-500">
                  Coming soon
                </p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div
            className={`${style.cardShadow} ${style.container} flex flex-col p-6 rounded-3xl relative mb-8`}
          >
            <p className="text-xl lg:text-2xl font-semibold w-64 mb-2">
              Find a study buddy to learn together
            </p>
            <img
              className="w-48 self-center"
              src={home_study_buddy}
              alt="Studdy Buddy"
            />
            <Link className="self-end" to="/">
              <div className="flex gap-2 mb-2">
                <p className="underline text-sm lg:text-md font-montserrat font-bold text-gray-500">
                  Coming soon
                </p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
