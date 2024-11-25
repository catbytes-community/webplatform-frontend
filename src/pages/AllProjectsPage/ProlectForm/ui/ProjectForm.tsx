import style from "./ProjectForm.module.css";
import React, {MutableRefObject, useCallback, useRef, useState} from "react";
import CrossImg from './cross.svg?react'
import {ButtonsEnum} from "../../../../shared/ui/Button/Button.tsx";

type ProjectFormProps = {
  isEdition: boolean
}

type PeriodType = {
  start?: number;
  end?: number;
}

export const ProjectForm = (props: ProjectFormProps) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const counterName = useRef<HTMLSpanElement | null>(null);
  const counterSummary = useRef<HTMLSpanElement | null>(null);
  const counterDescription = useRef<HTMLSpanElement | null>(null);
  const month = useRef<HTMLInputElement | null>(null);
  const projPeriod: MutableRefObject<PeriodType> = useRef({start: undefined, end: undefined});

  const getTodayDate = () => {
    const today = new Date();
    console.log(today.toISOString())
    return today.toISOString().split("T")[0];
  };

  const handleImage = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File = event.target.files?.[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e): void => {
        setPreviewSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  },[]);

  const updateText = (ref: React.MutableRefObject<HTMLSpanElement | null>, value: string, text: string, amount: number)  => {ref.current!.innerHTML = text + (amount - value.length)};

  const assignMonth = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
    const result: number = (projPeriod.current.end - projPeriod.current.start) / 1000 / 60 / 60 / 24 / 30
      ref.current!.value = String(Math.ceil(result));
  }

  const handlePeriod = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const date: Date = new Date(event.target.value)
    if (event.target.name === 'projectPeriodStart') {
      projPeriod.current.start = date.getTime();
    } else {
      projPeriod.current.end = date.getTime();
    }
    if(projPeriod.current.end !== undefined && projPeriod.current.start !== undefined) {
      assignMonth(month)
    }
  }

//TODO: add action to form and onSubmit. Add names for DB. Change counter on ref
  return (
    <div>
      <form method={'post'} action={'https://fom.in.ua/echo'}>
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
                <label htmlFor={'projectName'}>Project name*</label>
                <input type={'text'} name="projectName" id="projectName" required={true} placeholder={'Enter project name'}
                       onChange={(e) => updateText(counterName, e.target.value, 'Characters left ', 100)}
                       maxLength={100}/>
                <span ref={counterName}>Up to 100</span>
              </div>
              <div>
                <label>Project duration</label>
                <div>
                  <input ref={month} type={'number'} name="projectDuration" placeholder={'Ex: 1'}
                          disabled={true}/>
                  <p>months</p>
                </div>
                <span>How long will the project last? (auto complete)</span>
              </div>
              <div>
                <label htmlFor={'projectPeriod'}>Project period*</label>
                <div>
                  <div>
                    <p>From:</p>
                    <input type={'date'} id="projectPeriod" name="projectPeriodStart" onInput={handlePeriod} required={true} min={getTodayDate()}/>
                  </div>
                  <div>
                    <p>To:</p>
                    <input type={'date'} name="projectPeriodEnd" onInput={handlePeriod} required={true}/>
                  </div>
                </div>
                <span>Estimate the scope of project </span>
              </div>
            </div>
          </div>
          <div className={style.description_part}>
            <div>
              <h3>Add description</h3>
            </div>
            <div className={style.proj_description}>
              <div>
                <label>Project summary*</label>
                <textarea name="projectSummary" required={true} placeholder={'Summarize the project in 1-2 sentences'}
                          onChange={(e) => updateText(counterSummary, e.target.value, 'Characters left ', 200)}
                          maxLength={200}/>
                <span ref={counterSummary}>Up to 200 characters</span>
              </div>
              <div>
                <label>Detailed project description</label>
                <textarea name="projectDetails"
                          placeholder={'Describe the project’s goals, stages and expected outcomes'}
                          onChange={(e) => updateText(counterDescription, e.target.value, 'Characters left ', 2000)}
                          maxLength={2000}/>
                <span ref={counterDescription}>Up to 2 000 characters</span>
              </div>
            </div>
          </div>
          <div className={style.tags_part}>
            <div>
              <h3>Choose tags</h3>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
