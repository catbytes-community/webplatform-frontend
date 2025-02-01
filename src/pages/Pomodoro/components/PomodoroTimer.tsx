import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useContext} from "react";
import {SettingContext} from "../lib/SettingsContext.tsx";

// animate is true or false
// children is the animation in center of the circle

const PomodoroTimer =  ({key=1, timer, animate, children}) => {

    const {stopTimer} = useContext(SettingContext);

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={['rgba(255,77,127,255)', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            strokeWidth={16}
            size={330}
            trailColor={'#151932'}
            onComplete={() => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}
export default PomodoroTimer;