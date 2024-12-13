import logo from "../../assets/images/logopurple.webp";
import UserIcon from "../icons/UserIcon.tsx";

export default function Footer() {
    return (
        <div className="bg-white py-8">

            <div className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 rounded-2xl max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">

                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} className="w-24 mb-4" />
                        <div className="flex gap-4">
                            <span className="p-2 rounded-full bg-white shadow-md">
                                <UserIcon />
                            </span>
                            <span className="p-2 rounded-full bg-white shadow-md">
                                <UserIcon />
                            </span>
                            <span className="p-2 rounded-full bg-white shadow-md">
                                <UserIcon />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-28">
                        <div>
                            <ul className="space-y-2 text-center sm:text-left">
                                <li className="text-pink-900 font-medium hover:text-pink-700">Home</li>
                                <li className="text-pink-900 font-medium hover:text-pink-700">Mentorship</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-center sm:text-left">
                                <li className="text-pink-900 font-medium hover:text-pink-700">Collaboration</li>
                                <li className="text-pink-900 font-medium hover:text-pink-700">Tools</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-center sm:text-left">
                                <li className="text-pink-900 font-medium hover:text-pink-700">Study Buddy</li>
                                <li className="text-pink-900 font-medium hover:text-pink-700">Resources</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-pink-500 pt-5 pb-8 flex flex-col md:flex-row justify-between items-center text-sm text-pink-900">
                    <p className="hover:underline">©2024. All rights reserved</p>
                    <a href="#" className="hover:underline">
                        Privacy policy
                    </a>
                </div>
            </div>
        </div>
    );
}
