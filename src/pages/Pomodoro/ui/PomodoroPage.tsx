import style from "./PomodoroPage.module.css"
import {PomodoroTimer} from "../components/PomodoroTimer.tsx";
import {useState} from "react";

export const PomodoroPage = () => {

    // see if a button is active or not
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        // TO DO - HANDLE CALLBACK FOR EVERY BUTTON
        //callback();
        setIsActive(!isActive);
    }

    return (
        <div className={style.pomodoro}>
            <h1 className="text-white block" >Pomodoro Timer</h1>
            <ul className={"flex"}>
                <li>
                    {/*TO DO - ACTIVE CLASS HANDLING FOR EVERY BUTTON*/}
                    <button
                        className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                        onClick={handleClick}
                    >
                        {"Work"}
                    </button>
                </li>
                <li>
                    <button
                        className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                        onClick={handleClick}
                    >
                        {"Break"}
                    </button>
                </li>
                <li>
                    <button
                        className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                        onClick={handleClick}
                    >
                        {"Long break"}
                    </button>
                </li>
            </ul>

            <div>
                <PomodoroTimer
                    timer={1}
                    animate={true}
                />
            </div>


            <div className="buttons-below">
                <button
                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                    onClick={handleClick}
                >
                    {"Start"}
                </button>
                <button
                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                    onClick={handleClick}
                >
                    {"Pause"}
                </button>
                <button
                    className={`bg-[#07072e] text-white py-2 px-4 border-none rounded-md cursor-pointer gap-2 mt-7 mb-2 ${{}}`}
                    onClick={handleClick}
                >
                    {"Restart"}
                </button>
            </div>

        </div>
    );

}
