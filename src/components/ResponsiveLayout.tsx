import Header from "./Header"
import MainHero from "./MainHero"

function ResponsiveLayout() {
  return <div className="flex flex-col h-screen w-full font-mono px-10">
    <div><Header/></div>
    <div className="h-full w-full"><MainHero/></div>
  </div>
}
export default ResponsiveLayout