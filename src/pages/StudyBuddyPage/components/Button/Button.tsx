import style from "./Button.module.css";

export default function Button({title, click}: {title: string, click: any}) {
  return (
    <button onClick={click} className={style.button}>
        {title}
    </button>
  );
}
