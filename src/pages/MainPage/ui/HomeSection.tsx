import style from "./MainPage.module.css"
import Button from "../../../shared/ui/Button/Button.tsx";
import paw from "../../../shared/ui/images/mdi_paw 1.svg"
import announcement from "../../../shared/ui/images/Light-Orange-24.png"

function testFunction() {
  console.log("user click join us");
}

export const HomeSection = () => {
  return (
      <div className="px-10 py-3.5">
        <div className="grid grid-cols-[1.7fr_1fr] gap-5">
          <div className={`${style.cardShadow} bg-white py-20 px-9 rounded-3xl mt-12 relative`}>
            <div className="mb-12">
              <p className="text-5xl font-bold">Become a part of CatBytes</p>
              <p className="text-2xl font-montserrat font-medium mt-5">A woman’s community to grow together in IT
                professions</p>
              <p className="font-montserrat mt-3.5">We bring women together to reach the top in IT. Our community is a
                place where you will find available knowledge, unimylenics and mentors for personal and professional
                development. Apply to be a confident IT professional.</p>
            </div>
            <Button label="JOIN US" btnType="primary_big_btn" onClick={testFunction}/>
            <img className={style.paw} src={paw} alt="Paw"/>
            <div
                className={`${style.cardShadow} ${style.announcementContainer} rounded-3xl  mt-12 absolute right-5 -bottom-16`}>
              <p className="font-semibold text-2xl font-poppins w-44">View last announcements</p>
              <img className="relative z-30" src={announcement} alt="Announcement"/>
              <div className={style.blur}></div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-[#FFFFFF] to-[#FFA6AD] rounded-lg">
            <p>Find a study buddy to grow together</p>

            <p className="underline">SEARCH NOW</p>
            <span className="mx-2 text-gray-700">&rarr;</span>
          </div>

        </div>
      </div>
  );
};