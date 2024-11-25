import style from "./AllProjectsPage.module.css";
import Button, {ButtonsEnum} from "../../../shared/ui/Button/Button.tsx";
import React, {useState} from "react";
import {ProjectForm} from "../ProlectForm/ui/ProjectForm.tsx";
import Header from "../../../shared/ui/Header/Header.tsx";

export const AllProjectsPage = () => {
  const [isEdition, setEdition] = useState<boolean>(false);

  return <div>
    <div>
      <Header text={'Here must be menu'}/>
    </div>
    <div className={style.holder}>
      <ProjectForm isEdition={isEdition}/>
    </div>

  </div>;
};
