import { useState } from "react";
import { RiMenuFill,RiUser3Line,RiMenu3Fill,RiPieChartLine,RiCloseLine,RiSearch2Line,RiArrowDownLine } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar"


function App() {
  const [showMenu,setShowMenu] = useState(false);
  const [showOrder,setShowOrder] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <>
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>
      {/* Menu Movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiMenuFill/>
        </button>
        <button className="p-2">
          <RiUser3Line/>
        </button>
        <button className="p-2">
          <RiPieChartLine/>
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/> }
        </button>

      </nav>
      <main className="lg:pl-28 grid gird-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          <header className="p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">07 Noviembre 2023</p>
              </div>
            <form>
              <div className="w-full relative">
                <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
              <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none placeholder:Search"/>
              </div>
            </form>
            </div>
            <nav className="text-gray-300 flex items-center justify-between border-b mb-6 lg:justify-start lg:gap-8">
              <a className="relative py-2 pr-4 text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]
              " href="#">Hot Dishes</a>
              <a className=" py-2 pr-4 block" href="#">Cold Dishes</a>
              <a className=" py-2 pr-4 block" href="#">Soup</a>
              <a className=" py-2 pr-4 block" href="#">Grill</a>
            </nav>
          </header>
            <div className="flex items-center justify-between px-4">
              <h2 className=" text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg"><RiArrowDownLine/>Dine in</button>
            </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right:0">Carrito</div>
      </main>
    </div>
    </>
  )
}

export default App
