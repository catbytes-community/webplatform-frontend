export default function Navbar() {
  return (
    <div className="flex justify-between p-[50px] bg-[#FFA6AD]">
      <div>LOGO</div>

      <div className="flex justify-between gap-4">
        <p>HOME</p>
        <p>Mentorship</p>
        <p>Collaboration</p>
        <p>Study Buddy</p>
        <p>Resources</p>
        <p>Tools</p>
        <p>FAQ</p>
      </div>

      <div className="flex justify-between gap-4">
        <div>
          <button>SING IN</button>
        </div>

        <div>
          <button>JOIN US</button>
        </div>
      </div>
    </div>
  );
}
