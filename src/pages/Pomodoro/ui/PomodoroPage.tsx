
import style from "./PomodoroPage.module.css"
import {useContext} from "react";
import {SettingContext} from "../lib/SettingsContext";
import Settings from "../lib/Settings.tsx";
import {PomodoroTimer} from "../components/PomodoroTimer.tsx";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";


export const PomodoroPage = () => {

    const {pomodoro,
        executing,
        setCurrentTimer,
        SettingBtn,
        children,
        startAnimate,
        startTimer,
        pauseTimer,
        updateExecute,
        restartTimer
    } = useContext(SettingContext);

    return (
        <div>
            <Navbar/>

            <div className={style.pomodoro}>
                <h1>Pomodoro Timer</h1>

                {pomodoro === 0 ? <Settings/> :

                    <div className="flex flex-col items-center justify-center">
                        <ul className="flex space-x-0 mb-6">
                            <li>
                                <button
                                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${
                                        executing.active === 'work' ? 'active-label' : ''
                                    }`}
                                    onClick={() => setCurrentTimer('work')}
                                >
                                    Work
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${
                                        executing.active === 'short' ? 'active-label' : ''
                                    }`}
                                    onClick={() => setCurrentTimer('short')}
                                >
                                    Break
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${
                                        executing.active === 'long' ? 'active-label' : ''
                                    }`}
                                    onClick={() => setCurrentTimer('long')}
                                >
                                    Long Break
                                </button>
                            </li>
                        </ul>

                        <div className="time-container mb-6">
                            <div className={style.timerText}>
                                <PomodoroTimer timer={pomodoro} animate={startAnimate}>
                                    {children}
                                </PomodoroTimer>
                            </div>
                        </div>

                        <div className="flex space-x-0 mb-6">
                            <button
                                onClick={startTimer}
                                className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 ${
                                    !startAnimate ? 'active' : undefined
                                }`}
                            >
                                Start
                            </button>

                            <button
                                onClick={pauseTimer}
                                className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 ${
                                    startAnimate ? 'active' : undefined
                                }`}
                            >
                                Stop
                            </button>

                            <button
                                // onClick={restartTimer}
                                onClick={() => setCurrentTimer('short')}
                                className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 ${
                                    startAnimate ? 'active' : undefined
                                }`}
                            >
                                Restart
                            </button>
                        </div>

                        <div className="mt-4">
                            <button
                                className="bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer"
                                onClick={SettingBtn}
                            >
                                Settings
                            </button>
                        </div>
                    </div>
                }

            </div>


        </div>

    );
}