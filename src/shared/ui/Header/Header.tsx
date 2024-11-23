import style from "./Header.module.css";

export default function Header({ text }: { text: string }) {
  return <div style={{display: 'block'}}>{text}</div>;
}
