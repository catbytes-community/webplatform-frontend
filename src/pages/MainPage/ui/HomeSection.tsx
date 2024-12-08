import Button from "../../../shared/ui/Button/Button";

export const HomeSection = () => {
  function testFunction() {
    console.log("testFunction");
  }
  return (
    <>
      <div className="grid cols-2">
        <div className="w-508px h-740px top-667px left-40 radius-30px rotation-90 bg-gradient-to-r from-[#FFA6AD] to-[#FFFFFF] shadow-[#FFA6AD] shadow-blur: 0 6px 10px 0">
          <div className="p-5 border-solid border-2 rounded-lg w-740px h-508px t-159px l-40px r-30px">
            <h1 className="font-poppins w-700 size-48px line-height-57.6px">
              Become a part of CatBytes
            </h1>

            <h2>A women's community to grow together in IT professions</h2>

            <p>
              We bring women together to reach the top in IT. Our community is a
              place where you will find available knowledge, unimylenics and
              mentors for personal and professional development. Apply to be a
              confident IT professional.
            </p>

            <div className="w-180 h-51 radius-20 pt-16 pr-56 pb-16 pl-56 gap-10 size-xl rounded-lg bg-gradient-to-r from-[#FF377F] to-[#FFD482]">
              <Button
                label="JOIN US"
                btnType="primary_btn"
                onClick={testFunction}
              />
            </div>
          </div>

          <div className="w-220 h-426 top-734px left-334px radius-30px rotation-90 shadow-sm: 0 6px 10px 0">
            <div className="p-5 border-solid border-2 border-black rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#FFA6AD]">
              <div>
                <p>View last announcements</p>
              </div>

              <div>
                <p className="underline">VIEW NOW</p>
                <span className="mx-2 text-gray-700">&rarr;</span>
              </div>

              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className=" w-292 h-360 top-401px left-800px radius-30px rotation-90 p-5 border-solid border-2 bg-gradient-to-r from-[#FFFFFF] to-[#FFA6AD] layer-blur-30 rounded-lg bg-pink shadow: 0 6 10 0">
          <p>Take part in projects and collaboration</p>

          <p className="underline">LEARN MORE</p>
          <span className="mx-2 text-gray-700">&rarr;</span>
        </div>

        <div className="w-292 h-360 top-708px left-800px rotation-90 p-5 bg-gradient-to-r from-[#FFFFFF] to-[#FFA6AD] rounded-lg shadow-sm: 0 6px 10px 0">
          <p>Find a study buddy to grow together</p>

          <p className="underline">SEARCH NOW</p>
          <span className="mx-2 text-gray-700">&rarr;</span>
        </div>
      </div>
    </>
  );
};

export const Page2 = () => {
  return (
    <>
      <div className="bg-green grid-cols-3 grid-rows-2">
        <div className="flex items-center justify-between w-full w-fixed-1200px h-Hug-41px t-28px pr-40px pl-40px">
          <div className="w-75px h-21px font-Inter w-600 size-26px line-height-24px letter-(-1%) color-[#000000]">
            About us
          </div>

          <div className="w-550 h-346 top-120px left-325px radius-30px">
            <h1 className="bg-[#D9D9D9]">Lorem Ipsum</h1>
          </div>
        </div>

        <div className="p-5 border-solid border-2 border-l-rose-600 rounded-lg bg-pink-400">
          <h2>Lorem ipsum</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>

        <div className="p-5 border-solid border-2 border-black rounded-lg bg-pink-400">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div>
          <h3>Our mission</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="p-5 border-solid border-2 border-black rounded-lg bg-pink">
          <span className="mx-2 text-gray-700">&gt;</span>
          <p>1000+ members</p>
        </div>

        <div>
          <p>100+ mentors</p>
        </div>

        <div>10 areas of study</div>
      </div>
    </>
  );
};

export const Page3 = () => {
  return (
    <>
      <div className="bg-green">
        <header className="flex items-center justify-between w-full w-fixed-1200px h-Hug-41px t-28px pr-40px pl-40px">
          <h1>Announcements</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and</p>
        </header>

        <div className="p-5 border-solid border-2 border-l-rose-600 rounded-lg bg-pink-400">
          <h2>Lorem ipsum</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>

        <div className="p-5 border-solid border-2 border-black rounded-lg bg-pink-400">
          <h2>Lorem ipsum</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
      </div>
    </>
  );
};
