import Button from "../Button/Button";
import style from "./Alert.module.css";
import { useNavigate } from "react-router-dom";

export default function Alert({ setShowAlert, title, subtitle }: { setShowAlert: (show: boolean) => void, title: string, subtitle: string }) {
    const navigate = useNavigate();
  return (
    <div className={style.alertModal}>
        <p className="font-bold">{title}</p>
        <p className="my-5">{subtitle}</p>
        <div>
        <Button onClick={() => {
            setShowAlert(false)
            navigate("/")
        }} btnType="primary_btn" label="OK" />
        </div>
    </div>
  )
}
