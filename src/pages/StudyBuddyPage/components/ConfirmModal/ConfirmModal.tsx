import Button, { ButtonsEnum } from "../Button/Button";
import style from "./ConfirmModal.module.css";

export default function ConfirmModal({
  getConfirmation,
  text,
}: {
  getConfirmation: any;
  text: string;
}) {
  return (
    <div className={style.confirmModal}>
      <div>{text}</div>
      <div className="mt-2 flex gap-2">
        <Button
          btnType={ButtonsEnum.SECONDARY}
          onClick={() => getConfirmation(false)}
          label="No"
        />
        <Button
          btnType={ButtonsEnum.PRIMARY}
          onClick={() => getConfirmation(true)}
          label="Yes"
        />
      </div>
    </div>
  );
}
