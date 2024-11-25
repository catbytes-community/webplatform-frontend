export default function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between w-full w-fixed-1200px h-Hug-41px t-28px pr-40px pl-40px color-[#FFA6AD]">
        <div className="w-75px h-21px font-Inter w-600 size-26px line-height-24px letter-(-1%) color-[#000000]">
          LOGO
        </div>
        <ul className="flex items-center gap-10">
          <li>HOME</li>
          <li>Mentorship</li>
          <li>Collaboration</li>
          <li>Study Buddy</li>
          <li>Resources</li>
          <li>Tools</li>
          <li>FAQ</li>
        </ul>

        <div className="flex items-center gap-20 w-Hug-360px h-Hug-41px gap-20px">
          <div className="border-solid p-[2px] bg-gradient-to-r from-[#FFD482] to-[#FF377F] rounded-lg">
            <button className="bg-white rounded-lg p-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF377F] to-[#FFD482]">
              SING IN
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#FF377F] to-[#FFD482] rounded-lg text-l type-primary state-defoult ">
            <button>JOIN US</button>
          </div>
        </div>
      </header>
    </div>
  );
}
