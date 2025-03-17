
function Header() {
  return <>
    <div className='bg-red-50 min-h-16 text-black flex flex-nowrap flex-row items-center'>
      <div className="flex-none h-full m-8">
        <img src="./assets/sail-logo.png"></img>
      </div>
      <div className='flex-1'>
        <span>Example.</span>
        <span>Example.</span>
        <span>Example.</span>
      </div>
      <div className='flex-1'>
      </div>
    </div>
  </>
}

export default Header;