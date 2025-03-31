
import logo from "../assets/sail-logo.svg";

function Header() {
  return <>
    <div className='min-h-16 text-black flex flex-nowrap flex-row items-center'>
      <div className="flex-none h-full p-4">
        <img src={logo} alt="Sailboat Logo" className=" w-20 h-24 p-2 object-contain drop-shadow-xl"/>
      </div>
      <div className='flex-1'>
        <span>Example. </span>
        <span>Example. </span>
        <span>Example. </span>
      </div>
      <div className='flex-1'>
      </div>
    </div>
  </>
}

export default Header;