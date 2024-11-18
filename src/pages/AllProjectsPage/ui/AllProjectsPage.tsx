import style from "./AllProjectsPage.module.css";
import Button, {ButtonsEnum} from "../../../shared/ui/Button/Button.tsx";
import {useState} from "react";
import {ProjectForm} from "../ProlectForm/ui/ProjectForm.tsx";

export const AllProjectsPage = () => {
  const [isEdition, setEdition] = useState<boolean>(false);

  return <div className={style.holder}>
    <Button label={"create project"} btnType={ButtonsEnum.PRIMARY} onClick={() => alert("Hello")}/>
    <p>All Projects Page</p>
    <ProjectForm isEdition={isEdition}/>

  </div>;
};
