import style from "./AddProjectPage.module.css";
// import {useState} from "react";
import {ProjectForm} from "../ProlectForm/ui/ProjectForm.tsx";
import Header from "../../../shared/ui/Header/Header.tsx";

export const AddProjectPage = () => {
  // const [isEdition, setEdition] = useState<boolean>(false);
  const isEdition = false;

  return <div>
    <div>
      <Header text={'Here must be menu'}/>
    </div>
    <div className={style.holder}>
      <ProjectForm isEdition={isEdition}/>
    </div>

  </div>;
};
