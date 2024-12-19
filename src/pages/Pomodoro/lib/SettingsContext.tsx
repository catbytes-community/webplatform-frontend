import {createContext, useState} from "react";

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0);
    // this is from the settings page
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate] = useState(false);

    function startTimer(){
        setStartAnimate(true);
    }

    function pauseTimer(){
        setStartAnimate(false);
    }

    function stopTimer(){
        setStartAnimate(false);
    }

    function restartTimer() {
        if (!executing.active) {
            console.warn("No active state defined to restart the timer!");
            return;
        }
        const currentActive = executing.active;
        updateExecute({ ...executing, active: null }); // temporary reset
        setTimeout(() => {
            updateExecute({ ...executing, active: currentActive });
            setStartAnimate(false);
        }, 0);
    }

    const SettingBtn = () => {
        setExecuting({});
        setPomodoro(0);
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    }

    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const setTimerTime = evaluate => {
        // active is from Settings
        switch (evaluate.active){
            case "work":
                setPomodoro(evaluate.work);
                break;
            case "short":
                setPomodoro(evaluate.short);
                break;
            case "long":
                setPomodoro(evaluate.long);
                break;
            default:
                setPomodoro(0);
                break;
        }
    }

    const children = ({remainingTime}) =>{
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return `${minutes}:${seconds}`;
    }

    return(
        <SettingContext.Provider value={{
            stopTimer,
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingBtn,
            setCurrentTimer,
            children,
            restartTimer
        }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider;