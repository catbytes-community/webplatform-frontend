import style from "./Pomodoro.module.css"
import {MainAnimation} from "../components/MainAnimation/MainAnimation.tsx";
import Button from "../components/Button/Button.tsx";

export const Pomodoro = () => {
    return (
        <div className={style.pomodoro}>
            <h1 >Pomodoro Timer</h1>
            <ul>
                <li>
                    <Button
                        title="Work"
                        activeClass="active"
                        _callback="work"
                    />
                </li>
                <li>
                    <Button
                        title="Break"
                        activeClass="active"
                        _callback="break"
                    />
                </li>
                <li>
                    <Button
                        title="Long Break"
                        activeClass="active"
                        _callback="long-break"
                    />
                </li>
            </ul>

            <div>
                <MainAnimation
                    timer ={1}
                    animate = {true}
                />
            </div>


            <div className="buttons-below">
                <Button
                    title={"Start"}
                    activeClass={"active"}
                    _callback="start"
                />
                <Button
                    title={"Pause"}
                    activeClass={"active"}
                    _callback="pause"
                />
                <Button
                    title={"Restart"}
                    activeClass={"active"}
                    _callback="restart"
                />
            </div>

        </div>
    );
}
