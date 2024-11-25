import style from "./Benefits.module.css";

export const Benefits = () => {
  return (
    <div className={style["main"]}>
      <div className={`${style["div1"]} ${style["container"]}`}>
        <p>Mentorship</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button>Search Now</button>
      </div>
      <div className={`${style["div2"]} ${style["container"]}`}>
        Study Buddy
      </div>
      <div
        className={`${style["div3"]} ${style["container"]}`}
        style={{ position: "relative" }}
      >
        Resources and tools
        <div
          className="bg-pink-300"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <button>Search now</button>
        </div>
      </div>
      <div className={`${style["div4"]} ${style["container"]}`}>
        Collaboration and projects
      </div>
    </div>
  );
};
