// import React from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {children} from "../lib/Settings.tsx";

// animate is true or false
// children is the animation in center of the circle

const PomodoroTimer = ({timer, animate}: {timer:number, animate:boolean}) => {
    return (
        <CountdownCircleTimer
            isPlaying={animate}
            duration={timer * 60}
            colors={['#8cbae1', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            strokeWidth={14}
            size={320}
            trailColor={'#151932'}
            onComplete = {() => {
                // stopTimer()
            }}
        >
            {children}

        </CountdownCircleTimer>
    )
}

export {PomodoroTimer};