import style from "./AllProjectsPage.module.css";
import Button, {ButtonsEnum} from "../../../shared/ui/Button/Button.tsx";

export const AllProjectsPage = () => {
  return <div className={"holder"}>
    <Button label={"create project"} btnType={ButtonsEnum.PRIMARY} onClick={() => alert("Hello")}/>
    <p>All Projects Page</p>
  </div>;
};
