import { Card } from "../../../../../shared/ui";
import style from "./Filters.module.css";

export default function Filters() {
  return (
    <div className="flex gap-2 my-4">
      <button className={`${style.filterButton_active} ${style.filterButton}`}>All ▼</button>
      <button className={style.filterButton}>Study topic ▼</button>
      <button className={style.filterButton}>Level ▼</button>
      <button className={style.filterButton}>Study days ▼</button>
      <button className={style.filterButton}>Study times ▼</button>
    </div>
  );
}
