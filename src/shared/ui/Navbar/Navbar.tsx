import Button from '../Button/Button';
import logo from '../../assets/images/logopurple.webp';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCreateApplication = location.pathname === '/create_application';
  const isLogInPage = location.pathname === '/login';

  function handleClickJoinUs() {
    navigate('/create_application');
  }
  function handleClickSignIn() {
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-between w-full p-5 gap-30 pl-10 pr-5 font-[Monserrat]">
      <div className="w-24">
        <img src={logo} />
      </div>

      <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5">
        <nav className="flex items-center gap-6 -ml-96">
          <Link to="/">HOME</Link>
          <Link to="/pomodoro">Tools</Link>
        </nav>
      </div>

      <div className="flex justify-between gap-10 font-[Monserrat]">
        <Button
          label="JOIN US"
          btnType="primary_btn"
          onClick={handleClickJoinUs}
          disabled={isCreateApplication}
        />

        <Button
          label="SIGN IN"
          btnType="secondary_btn"
          onClick={handleClickSignIn}
          disabled={isLogInPage}
        />
      </div>
    </div>
  );
}
