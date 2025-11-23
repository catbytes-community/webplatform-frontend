import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './HomeSection.module.css';

import paw from '../../../shared/assets/images/paw-icon.svg';
import landing_mentor_icons from '../../../shared/assets/images/landing-mentor-icons.svg';
import announcement from '../../../shared/assets/images/announsment-icon.png';
import homeGroup from '../../../shared/assets/images/home-group.png';
import home_study_buddy from '../../../shared/assets/images/home-study-buddy.png';

import landing_projects_logged from '../../../shared/assets/images/landing-projects-logged.svg';
import Button from '../../../shared/ui/Button/Button.tsx';
import ArrowRightIcon from '../../../shared/ui/icons/ArrowRightIcon.tsx';
import CatSvg from './CatSvg.tsx';

type UserRole = 'admin' | 'member' | 'mentor';

type ApiUser = {
  id: number;
  name: string;
  email: string;
  about: string;
  created_at: string;
  languages: string[] | null;
  roles: { role_name: UserRole; role_id: number }[];
  mentor_id: string | null;
  is_mentor_active: boolean;
};

const ROLE_PRIORITY: Record<UserRole, number> = {
  admin: 0,
  mentor: 1,
  member: 2,
};

export const HomeSection = () => {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState<UserRole | 'guest'>('guest');
  const [userName, setUserName] = useState<string | null>(null);

  function handleClickJoinUs() {
    navigate('/create_application');
  }

  function getHighestRole(
    roles: { role_name: UserRole; role_id: number }[]
  ): UserRole | 'guest' {
    if (!roles || roles.length === 0) return 'guest';

    let best: UserRole | null = null;

    for (const r of roles) {
      if (!best) {
        best = r.role_name;
        continue;
      }
      if (ROLE_PRIORITY[r.role_name] < ROLE_PRIORITY[best]) {
        best = r.role_name;
      }
    }

    return best ?? 'guest';
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log(
      'Get user from localstore on HomeSection component',
      storedUser
    );
    if (!storedUser) return;

    try {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
      //logik for different roles do not need now
      // setHasLocalUser(true);

      const apiBase = import.meta.env.VITE_DEVAPI;

      const url = `${apiBase}user/${user.id}`;

      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch user: ${res.status}`);
          return res.json();
        })
        .then((data: ApiUser) => {
          console.log('[HOMESECTION] User fetched from API:', data);
          //array check
          if (!Array.isArray(data.roles)) {
            console.error('[HOMESECTION] Invalid roles:', data.roles);
            return;
          }
          console.log('[HOMESECTION] Roles:', data.roles);
          const highestRole = getHighestRole(data.roles);
          setUserRole(highestRole);
          if (data.name && !userName) {
            setUserName(data.name);
          }
        })
        .catch((err) => {
          console.error('Error fetching user from API:', err);
        });
    } catch (err) {
      console.error('Error parsing user from localStorage:', err);
    }
  }, []);

  const isMember = userRole === 'member';
  const isAdmin = userRole === 'admin';
  const isMentor = userRole === 'mentor';

  //TODO: differend cards if different roles discuss it
  // const isLogged = hasLocalUser ? isAdmin || isMentor || isMember : true;
  const isLogged = true;

  const firstName =
    userName?.trim()?.split(' ')?.[0] ||
    (isAdmin || isMentor || isMember ? 'there' : '');

  const title = isAdmin
    ? `Welcome, ${firstName}!`
    : isMentor
    ? `Welcome mentor, ${firstName}!`
    : isMember
    ? `Welcome back, ${firstName}!`
    : 'Become a part of CatBytes';

  const subtitle = isAdmin
    ? 'You can manage the community and mentor others.'
    : isMentor
    ? 'Thank you for supporting other women in tech'
    : isMember
    ? 'Happy to see you in our community!'
    : 'Community for women in tech';

  const description = isAdmin
    ? 'Soon you will see admin & mentor tools, events and applications here.'
    : isMentor
    ? 'Soon you will see events, mentor tools and mentee applications here.'
    : isMember
    ? 'Explore projects, study buddies, mentors and more in our community and private Discord server.'
    : 'We bring women together to support each other in achieving our career goals in the tech industry. Join our private Discord server.';

  let buttonLabel = 'JOIN US';
  let buttonOnClick: () => void = handleClickJoinUs;

  if (isMember) {
    buttonLabel = 'BECOME A MENTOR';
    buttonOnClick = () => navigate('/create_application_mentor');
  }

  if (isMentor || isAdmin) {
    buttonLabel = 'EVENTS (SOON)';
    buttonOnClick = () => {
      console.log('Events page will be available soon');
      // i think later we will navigate("/events") or something else
    };
  }

  return (
    <div className="flex justify-center px-10 py-3.5 overflow-hidden">
      <div className={`${style.main} lg:grid grid-cols-[1.6fr_0.8fr] gap-5`}>
        <div className="relative">
          <div
            className={`${style.cardShadow} ${style.container} lg:h-[508px]  
            pt-12 lg:py-20 px-9 rounded-3xl mt-12 lg:mb-40 relative`}
          >
            <div className="mb-12">
              <p className="text-3xl lg:text-5xl font-bold">{title}</p>
              <p className="text-xl lg:text-2xl font-montserrat font-medium mt-5">
                {subtitle}
              </p>
              <p className="font-montserrat mt-3.5 text-sm">{description}</p>
            </div>
            <Button
              label={buttonLabel}
              btnType="primary_big_btn"
              onClick={buttonOnClick}
              disabled={false}
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
                isLogged ? 'w-44' : ''
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

            <CatSvg
              className={`${style.catImage} ${
                isLogged ? style.catLogged : style.catGuest
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
