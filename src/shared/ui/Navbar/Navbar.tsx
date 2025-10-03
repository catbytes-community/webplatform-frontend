import Button from '../Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import pinkLogo from '../../assets/images/pink-logo.png';

export default function Navbar({ isLogin = false }: { isLogin?: boolean }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMentor, setIsMentor] = useState(false);
  const [userId, setUserId] = useState('');

  const isCreateApplication = location.pathname === '/create_application';
  const isLogInPage = location.pathname === '/login';

  useEffect(() => {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null;

    if (user) {
      console.log('User data from local storage:', user);
      setIsMentor(
        user?.roles?.filter(
          (role: { role_id: number; role_name: string }) =>
            role.role_name === 'mentor'
        ).length > 0
      );
      setUserId(user.id);
    }

    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is authenticated via Firebase');
        setIsAuth(true); // User is authenticated via Firebase
      } else {
        console.log('User is not authenticated via Firebase');
        setIsAuth(false); // User is not authenticated via Firebase
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  function handleClickJoinUs() {
    navigate('/create_application');
  }

  function handleClickSignIn() {
    navigate('/login');
  }

  function handleClickBecomeMentor() {
    navigate('/create_application_mentor');
  }

  function handleClickSignOut() {
    signOut(auth)
      .then(() => {
        Cookies.remove('userUID'); // Clear the cookie on sign out
        setIsAuth(false); // Update the authentication state
        localStorage.removeItem('user'); // Clear the user data from local storage
        setIsMentor(false); // Update the mentor state
        navigate('/'); // Redirect to the home page
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-6 py-4 shadow-[0_6px_10px_0_rgba(255,166,173,0.4)] rounded-3xl">
      {/* Логотип */}
      <div className="flex items-center gap-10 w-full justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={pinkLogo} className="w-24" />
          </Link>

          <nav
            className={`lg:flex items-center gap-6 ${
              isMenuOpen ? 'block' : 'hidden'
            } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0 rounded-lg transition-all duration-300 z-[100]`}
          >
            <Link
              to="/"
              className="block lg:inline text-gray-600 text-sm leading-[1.5] font-montserrat"
            >
              Home
            </Link>
            <Link
              to="/pomodoro"
              className="block lg:inline text-gray-600 text-sm leading-[1.5] font-montserrat"
            >
              Tools
            </Link>
            {isMentor && (
              <Link
                to="/applications"
                className="block lg:inline text-gray-600 text-sm leading-[1.5] font-montserrat"
              >
                Applications
              </Link>
            )}
            {isAuth && (
              <Link
                to={`/user_profile/${userId}`}
                className="block lg:inline text-gray-600 text-sm leading-[1.5] font-montserrat"
              >
                My Profile
              </Link>
              // <Button
              //   label="My Profile"
              //   btnType="primary_btn"
              //   onClick={() => navigate()}
              // />
            )}
          </nav>
        </div>
        <div className="flex items-center sm:gap-10 gap-2">
          <div className="lg:flex gap-5">
            {!isAuth ? (
              <button
                onClick={handleClickJoinUs}
                disabled={isCreateApplication}
                className="primary_btn hidden lg:block"
              >
                JOIN US
              </button>
            ) : (
              !isMentor && (
                <button
                  onClick={handleClickBecomeMentor}
                  disabled={isCreateApplication}
                  className="primary_btn hidden lg:block"
                >
                  BECOME A MENTOR
                </button>
              )
            )}

            {!isLogin && (
              <div className="flex gap-5">
                <Button
                  label={isAuth ? 'SIGN OUT' : 'SIGN IN'}
                  btnType="secondary_btn"
                  onClick={isAuth ? handleClickSignOut : handleClickSignIn}
                  disabled={isLogInPage}
                />
              </div>
            )}
          </div>
          {/* Бургер-меню (для мобильных) */}
          <button
            className="block lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
