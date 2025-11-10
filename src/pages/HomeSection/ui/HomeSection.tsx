import style from './HomeSection.module.css';
import Button from '../../../shared/ui/Button/Button.tsx';
import paw from '../../../shared/assets/images/paw-icon.svg';
import landing_mentor_icons from '../../../shared/assets/images/landing-mentor-icons.svg';
import announcement from '../../../shared/assets/images/announsment-icon.png';
import ArrowRightIcon from '../../../shared/ui/icons/ArrowRightIcon.tsx';
import homeGroup from '../../../shared/assets/images/home-group.png';
import home_study_buddy from '../../../shared/assets/images/home-study-buddy.png';
import landing_projects_logged from '../../../shared/assets/images/landing-projects-logged.svg';
import { Link, useNavigate } from 'react-router-dom';
import CatSvg from './CatSvg.tsx';

export const HomeSection = () => {
  const navigate = useNavigate();
  function handleClickJoinUs() {
    console.log('here');
    navigate('/create_application');
  }

  const isLogged = true;

  return (
    <div className={style.wrapper}>
      <div className={style.grid}>
        <div className={style.relativeBlock}>
          <div
            className={`${style.cardShadow} ${style.container} ${style.leftBlock}`}
          >
            <div className={style.textBlock}>
              <p className={style.title}>Become a part of CatBytes</p>
              <p className={style.subtitle}>Community for women in tech</p>
              <p className={style.description}>
                We bring women together to support each other in achieving our
                career goals in tech industry. Join our private Discord server.
              </p>
            </div>

            <Button
              label="JOIN US"
              btnType="primary_big_btn"
              onClick={handleClickJoinUs}
              disabled={false}
            />
            <img className={style.paw} src={paw} alt="Paw" />
          </div>
          <div className={`${style.cardShadow} ${style.announcementBlock}`}>
            <p
              className={`${style.announcementTitle} ${
                isLogged ? style.narrow : ''
              }`}
            >
              View last announcements
            </p>

            <div className={style.announcementBottom}>
              <img
                className={style.image}
                src={isLogged ? landing_mentor_icons : announcement}
                alt="landing_mentor_icons"
              />
              <Link className={style.linkWrapper} to="/">
                <div className={style.linkContent}>
                  <p className={style.linkText}>Coming soon</p>
                  <ArrowRightIcon />
                </div>
              </Link>
            </div>

            <CatSvg
              className={`${style.catImage} ${
                isLogged ? style.catLogged : style.catGuest
              }`}
            />

            <div className={style.blur}></div>
          </div>
        </div>

        <div className={style.rightColumn}>
          <div
            className={`${style.cardShadow} ${style.container} ${style.card}`}
          >
            <p className={style.cardTitle}>
              Take part in projects and collaborations
            </p>
            <img
              className={style.cardImageProjects}
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
            className={`${style.cardShadow} ${style.container} ${style.card}`}
          >
            <p className={style.cardTitle}>
              Find a study buddy to learn together
            </p>
            <img
              className={style.cardImageBuddy}
              src={home_study_buddy}
              alt="Studdy Buddy"
            />
            <Link className={style.cardLink} to="/">
              <div className={style.cardLinkContent}>
                <p className={style.cardLinkText}>Coming soon</p>
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
