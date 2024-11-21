import s from "./SearchInput.module.css";
import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon.tsx";

type SearchInputProps = {
    setValue: (value: string) => void;
}

export const SearchInput = ({setValue}:SearchInputProps) => {
    return (
        <div className="relative">
            <input type='text' placeholder='Search' className={s.input} onChange={(e) => setValue(e.target.value)} />
            <div className="absolute top-6 right-2">
                <MagnifyingGlassIcon/>
            </div>
        </div>
    );
}