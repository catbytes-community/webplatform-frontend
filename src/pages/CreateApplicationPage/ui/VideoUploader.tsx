import { ChangeEvent } from 'react';
import style from './CreateApplicationPage.module.css';

type Props = {
  onSelect: (file: File | null) => void;
  initialName?: string;
};

function VideoUploader({ onSelect }: Props): JSX.Element {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // setSelectedFile(file);
      onSelect(file);
    } else {
      // setSelectedFile(null);
      onSelect(null);
    }
  };

  return (
    <div className="mb-2">
      <input
        // TODO: Create a proper styles
        className={style.input}
        // className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default VideoUploader;
