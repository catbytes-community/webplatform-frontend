// import logo from "../../assets/images/logopurple.webp";
// import UserIcon from "../icons/UserIcon.tsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-8 mt-20">
      <div className="bg-gradient-to-r rounded-2xl max-w-[100rem] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-16 gap-x-8">
            <div>
              <ul className="space-y-2 text-center sm:text-left">
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  <Link to="/pomodoro">Tools</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-center sm:text-left">
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  Mentorship (Coming soon)
                </li>
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  Collaboration (Coming soon)
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-center sm:text-left">
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  Study Buddy (Coming soon)
                </li>
                <li className="text-pink-900 font-medium hover:text-pink-700 cursor-pointer">
                  Resources (Coming soon)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500 pt-5 pb-8 flex flex-col md:flex-row justify-between items-center text-sm text-pink-900">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center sm:items-end">
            <Link
              to="/privacy_policy"
              className="hover:underline cursor-pointer"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms_and_conditions"
              className="hover:underline cursor-pointer"
            >
              Terms and Conditions
            </Link>
          </div>
          <p className="mt-5">©2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
