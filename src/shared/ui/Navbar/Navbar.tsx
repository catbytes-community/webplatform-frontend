export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-611 p-25 gap-30 bg-[#FFA6AD] pl-10 pr-5 font-[Monserrat]">
      <div>LOGO</div>

      <div className="flex justify-between gap-6 w-611px h-25px ml-1 pl-5">
        <nav className="flex items-center gap-6 -ml-96">
          <p>
            <a href="#">HOME</a>
          </p>
          <p>
            <a href="#">Mentorship</a>
          </p>
          <p>
            <a href="#">Collaboration</a>
          </p>
          <p>
            <a href="#">Study Buddy</a>
          </p>
          <p>
            <a href="#">Resources</a>
          </p>
          <p>
            <a href="#">Tools</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
        </nav>
      </div>

      <div className="flex justify-between gap-10 font-[Monserrat]">
        <div className="py-1 px-3 rounded-full bg-gradient-to-r from-[#FFD482] to-[#FF377F]">
          <button className="bg-white rounded-full pt-12 pr-44 pb-12 pl-10 text-l text-[#FF377F] [#FFD481]">
            SING IN
          </button>
        </div>

        <div className="pt-12 pr-44 pb-12 pl-10 gap-10 border-2 rounded-full bg-gradient-to-r from-[#FFD482] to-[#FF377F] text-l text-[#FEFFFE]">
          <button>JOIN US</button>
        </div>
      </div>
    </div>
  );
}
