import profile from '../../assets/images/profile.jpg'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-[#EFFDF4] whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3 sticky top-0 w-full z-50">
      <h2 className="text-green-600 text-2xl font-bold leading-tight tracking-[-0.015em]">Mind Care</h2>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#101518] text-sm font-medium leading-normal" href="#appointment">My Appointments</a>
          {/* <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Messages</a> */}
          <a className="text-[#101518] text-sm font-medium leading-normal" href="#resources">Resources</a>
          <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Account</a>
        </div>
        <div className="size-10">
          <img src={profile} alt="" className=' rounded-full' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
