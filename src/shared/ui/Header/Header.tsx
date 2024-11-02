import style from "./Header.module.css";

export default function Header({ text }: { text: string }) {
  return <h1 className={style.mainHeader}>{text}</h1>;
}
