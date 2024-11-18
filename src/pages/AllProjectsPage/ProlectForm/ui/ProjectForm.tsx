import style from "./ProjectForm.module.css";
import React, {useCallback, useState} from "react";
import CrossImg from './cross.svg?react'

type ProjectFormProps = {
  isEdition: boolean
}

export const ProjectForm = (props: ProjectFormProps) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

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

  return (
    <div className={style.add_proj_holder}>
      <h1 className={style.title}>{props.isEdition ? 'Edit your' : 'Add new'} project</h1>
      <form>
        <div className={style.proj_img}>
          <input type="file"
                 id="imageInput"
                 accept="image/png,image/jpeg"
                 onChange={handleImage}
                 hidden
          />
          <label htmlFor="imageInput" >
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
      </form>
    </div>);
};
