import style from "./MainPage.module.css";
import Button from "../../../shared/ui/Button/Button.tsx";
import paw from "../../../shared/assets/images/mdi_paw 1.svg";
import announcement from "../../../shared/assets/images/Light-Orange-24.png";
import cat from "../../../shared/assets/images/cat.svg";
import ArrowRightIcon from "../../../shared/ui/icons/ArrowRightIcon.tsx";
import homeGroup from "../../../shared/assets/images/home_group.png";
import home_study_buddy from "../../../shared/assets/images/home_study_buddy.png";
import { Link, useNavigate } from "react-router-dom";

export const HomeSection = () => {
  const navigate = useNavigate();
  function handleClickJoinUs() {
    navigate("/create_application");
  }

  return (
    <div className="flex justify-center px-10 py-3.5">
      <div className={`${style.main} grid grid-cols-[1.6fr_0.8fr] gap-5`}>
        <div
          className={`${style.cardShadow} ${style.container} ${style.left}  py-20 px-9 rounded-3xl mt-12 relative`}
        >
          <div className="mb-12">
            <p className="text-5xl font-bold">Become a part of CatBytes</p>
            <p className="text-2xl font-montserrat font-medium mt-5">
              A woman’s community to grow together in IT professions
            </p>
            <p className="font-montserrat mt-3.5 text-sm">
              We bring women together to reach the top in IT. Our community is a
              place where you will find available knowledge, unimylenics and
              mentors for personal and professional development. Apply to be a
              confident IT professional.
            </p>
          </div>
          <Button
            label="JOIN US"
            btnType="primary_big_btn"
            onClick={handleClickJoinUs}
          />
          <img className={style.paw} src={paw} alt="Paw" />
          <div
            className={`${style.cardShadow} ${style.announcementContainer} rounded-3xl  mt-12 absolute right-5 -bottom-28`}
          >
            <p className="font-semibold text-2xl font-poppins w-44">
              View last announcements
            </p>
            <div className="flex items-end justify-between">
              <img
                className="relative z-30"
                src={announcement}
                alt="Announcement"
              />
              <Link className="z-50" to="/">
                <div className="flex gap-2 mb-8">
                  <p className="underline font-montserrat font-bold text-gray-600">
                    VIEW NOW
                  </p>
                  <ArrowRightIcon />
                </div>
              </Link>
            </div>
            <img src={cat} alt="Cat" className={style.cat} />
            <div className={style.blur}></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className={`${style.cardShadow} ${style.container} flex flex-col p-6 rounded-3xl relative`}
          >
            <p className="text-2xl font-semibold w-64 mb-6">
              Take part in projects and collaboration
            </p>
            <img className="w-56" src={homeGroup} alt="Projects" />
            <Link className="self-end" to="/projects">
              <div className="flex gap-2 mb-2">
                <p className="underline font-montserrat font-bold text-gray-500">
                  LEARN MORE
                </p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div
            className={`${style.cardShadow} ${style.container} flex flex-col p-6 rounded-3xl relative`}
          >
            <p className="text-2xl font-semibold w-64 mb-2">
              Take part in projects and collaboration
            </p>
            <img
              className="w-48 self-center"
              src={home_study_buddy}
              alt="Studdy Buddy"
            />
            <Link className="self-end" to="/study_groups">
              <div className="flex gap-2 mb-2">
                <p className="underline font-montserrat font-bold text-gray-500">
                  SEARCH NOW
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
