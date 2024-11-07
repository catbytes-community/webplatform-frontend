import style from "./Settings.module.css"

const children = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
        <div className={style.timerText}>
            {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        </div>
    );
};

export { children };
