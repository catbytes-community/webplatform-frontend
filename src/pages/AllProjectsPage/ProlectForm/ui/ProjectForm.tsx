import style from "./ProjectForm.module.css";
import React, {useCallback, useEffect, useState} from "react";
import CrossImg from './cross.svg?react'
import Button, {ButtonsEnum} from "../../../../shared/ui/Button/Button.tsx";

type ProjectFormProps = {
  isEdition: boolean
}



export const ProjectForm = (props: ProjectFormProps) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [counter, setCounter] = useState<number>(100);

  const handleImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = event.target.files?.[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  },[]);

  const charactersCounter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;
    setCounter(100 - text.length);
  }

//TODO: add action to form and onSubmit
  return (
    <div>
      <form method={'post'} action={''}>
        <div className={style.proj_header}>
          <h1 className={style.title}>{props.isEdition ? 'Edit your' : 'Add new'} project</h1>
          <button className={ButtonsEnum.PRIMARY} type={"submit"}>{props.isEdition ? 'save changes' : 'create project'}</button>
        </div>
        <div className={style.holder}>
          <div className={style.main_part}>
            <div className={style.proj_img}>
              <input type="file"
                     name={'projectImage'}
                     id="imageInput"
                     accept="image/png,image/jpeg"
                     onChange={handleImage}
                     hidden
              />
              <label htmlFor="imageInput">
                {previewSrc ? (
                    <img
                        src={previewSrc}
                        alt="Uploaded image preview"
                    />
                ) : (
                    <>
                      image<CrossImg/>
                    </>
                )}
              </label>
            </div>
            <div className={style.proj_main}>
              <div>
                <label>Project name*</label>
                <input name="projectName" required={true} placeholder={'Enter project name'}
                       onChange={charactersCounter}
                       maxLength={100}/>
                <span>Characters left {counter}</span>
              </div>
              <div>
                <label>Project duration*</label>
                <input name="projectDuration" required={true} placeholder={'Ex: 1 month'} maxLength={25}/>
                <span>How long will the project last?</span>
              </div>
              <div>
                <label>Project period*</label>
                <input type={'text'} name="projectPeriod" required={true} placeholder={'Ex: 1 Nov - 1 Dec'}
                       maxLength={25}/>
                <span>Estimate the scope of project </span>
              </div>
            </div>
          </div>
          <div className={style.description_part}>
            <div>
              <h3>Add description</h3>
            </div>
            <div className={style.proj_description}>
              <div >
                <label>Project summary*</label>
                <textarea name="projectSummary" required={true} placeholder={'Summarize the project in 1-2 sentences'}
                       maxLength={200}/>
                <span>Up to 200 characters</span>
              </div>
              <div>
                <label>Detailed project description</label>
                <textarea name="projectDetails" required={true} placeholder={'Describe the project’s goals, stages and expected outcomes'}
                       maxLength={200}/>
                <span>Up to 2 000 characters</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>);
};
