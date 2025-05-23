import { useContext, useState } from "react";
import { SettingContext } from "../lib/SettingsContext.jsx";
import Settings from "../lib/Settings.jsx";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";
import PomodoroTimer from "../components/PomodoroTimer.jsx";
import { FaPlay, FaPause, FaCog, FaRedo } from "react-icons/fa";
import Footer from "../../../shared/ui/Footer/Footer.tsx";

export const PomodoroPage = () => {
  const {
    counter,
    activeState,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    restartTimer,
  } = useContext(SettingContext);

  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    if (isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
    setIsRunning(!isRunning); //switch
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen mx-auto py-12 bg-double-background bg-bottom bg-no-repeat bg-contain -mb-20">
        <h1 className="text-5xl font-extrabold text-center text-black mb-8 drop-shadow-lg">
          Pomodoro Timer
        </h1>

        {counter === 0 ? (
          <Settings />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <ul className="flex mb-10 space-x-6 list-none">
              <li>
                <button
                  className={`bg-rose-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:ring ${
                    activeState.active === "work" ? "ring-4 ring-rose-700" : ""
                  }`}
                  onClick={() => setCurrentTimer("work")}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  className={`bg-rose-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:ring ${
                    activeState.active === "short" ? "ring-4 ring-rose-700" : ""
                  }`}
                  onClick={() => setCurrentTimer("short")}
                >
                  Break
                </button>
              </li>
              <li>
                <button
                  className={`bg-rose-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:ring ${
                    activeState.active === "long" ? "ring-4 ring-rose-700" : ""
                  }`}
                  onClick={() => setCurrentTimer("long")}
                >
                  Long Break
                </button>
              </li>
            </ul>

            <div className="relative w-96 h-96 flex items-center justify-center rounded-full bg-[#370413] shadow-xl mb-6">
              <div className="absolute flex items-center justify-center text-6xl font-extrabold text-white">
                <PomodoroTimer
                  key={counter}
                  timer={counter}
                  animate={startAnimate}
                >
                  {children}
                </PomodoroTimer>
              </div>
            </div>

            <div className="flex space-x-6 mt-6">
              <button
                onClick={handleButtonClick}
                className="bg-rose-500 text-white p-4 rounded-full shadow-xl transition-transform transform hover:scale-110 focus:ring focus:ring-pink-300 flex items-center justify-center"
              >
                {isRunning ? <FaPause size={28} /> : <FaPlay size={28} />}
              </button>
              <button
                onClick={restartTimer}
                className="bg-rose-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:ring focus:ring-pink-300"
              >
                <FaRedo size={24} />
              </button>
              <button
                className="bg-rose-600 text-white p-4 rounded-full shadow-xl transition-transform transform hover:scale-110 focus:ring focus:ring-pink-300 flex items-center justify-center"
                onClick={SettingBtn}
              >
                <FaCog size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
