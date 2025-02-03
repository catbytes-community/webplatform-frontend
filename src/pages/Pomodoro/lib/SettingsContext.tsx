// import {createContext, useState} from "react";

// export const SettingContext = createContext();

// const SettingsContextProvider = (props) => {

//     const [counter, setCounter] = useState(0);
//     // this is from the settings page
//     const [activeState, setActiveState] = useState({});
//     const [startAnimate, setStartAnimate] = useState(false);

//     function startTimer(){
//         setStartAnimate(true);
//     }

//     function pauseTimer(){
//         setStartAnimate(false);
//     }

//     function stopTimer(){
//         setStartAnimate(false);
//     }

//     function restartTimer() {
//         if (!activeState.active) {
//             console.warn("No active state defined to restart the timer!");
//             return;
//         }
//         const currentActive = activeState.active;
//         updateExecute({ ...activeState, active: null }); // temporary reset
//         setTimeout(() => {
//             updateExecute({ ...activeState, active: currentActive });
//             setStartAnimate(false);
//         }, 0);
//     }

//     const SettingBtn = () => {
//         setActiveState({});
//         setCounter(0);
//     }

//     const updateExecute = updatedSettings => {
//         setActiveState(updatedSettings);
//         setTimerTime(updatedSettings);
//     }

//     function setCurrentTimer(current_state){
//         updateExecute({
//             ...activeState,
//             active: current_state
//         })
//         setTimerTime(activeState)
//     }

//     const setTimerTime = evaluate => {
//         // active is from Settings
//         switch (evaluate.active){
//             case "work":
//                 setCounter(evaluate.work);
//                 break;
//             case "short":
//                 setCounter(evaluate.short);
//                 break;
//             case "long":
//                 setCounter(evaluate.long);
//                 break;
//             default:
//                 setCounter(0);
//                 break;
//         }
//     }

//     const children = ({remainingTime}) =>{
//         const minutes = Math.floor(remainingTime / 60);
//         const seconds = remainingTime % 60;

//         return `${minutes}:${seconds}`;
//     }

//     return(
//         <SettingContext.Provider value={{
//             stopTimer,
//             updateExecute,
//             counter,
//             activeState,
//             startAnimate,
//             startTimer,
//             pauseTimer,
//             SettingBtn,
//             setCurrentTimer,
//             children,
//             restartTimer
//         }}>
//             {props.children}
//         </SettingContext.Provider>
//     )
// }
// export default SettingsContextProvider;
