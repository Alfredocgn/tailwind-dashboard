import { useState } from "react";
import { RiMenuFill,RiUser3Line,RiMenu3Fill,RiPieChartLine,RiCloseLine,RiSearch2Line,RiArrowDownLine,RiDeleteBin6Line } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar"


function App() {
  const [showMenu,setShowMenu] = useState(false);
  const [showOrder,setShowOrder] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
    setShowOrder(false)
  }
  const toggleOrder = () =>{
    setShowOrder(!showOrder)
    setShowMenu(false)
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
        <button onClick={toggleOrder} className="p-2">
          <RiPieChartLine/>
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/> }
        </button>

      </nav>
      <main className="lg:pl-32 grid gird-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/* Header */}
          <header>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">07 Noviembre 2023</p>
              </div>
            <form>
              <div className="w-full relative">
                <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
              <input type="text" className=" bg-[#1f1d2b]   w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none placeholder:Search"/>
              </div>
            </form>
            </div>
            <nav className="textbg-[#1f1d2b]-gray-300 flex items-center justify-between border-b mb-6 lg:justify-start lg:gap-8">
              <a className="relative py-2 pr-4 text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]
              " href="#">Hot Dishes</a>
              <a className=" py-2 pr-4 block" href="#">Cold Dishes</a>
              <a className=" py-2 pr-4 block" href="#">Soup</a>
              <a className=" py-2 pr-4 block" href="#">Grill</a>
            </nav>
          </header>
            <div className="flex items-center justify-between mb-16">
              <h2 className=" text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg"><RiArrowDownLine/>Dine in</button>
            </div>
            <div className="grid grid-cols-1 p-8 gap-16 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center">
                <img src="platillo-1.png" alt="dish" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "/>
                <p className="text-xl">Spicy seasoned seafood nodles</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-500">20 Bowls available</p>
              </div>
            </div>
        </div>
        <div className={` transition-all bg-[#1f1d2b] lg:col-span-2 fixed lg:static right-0 top-0 w-full h-full ${showOrder ? "right-0" : "-right-full"}`}>
          {/* Orders */}
          <div className="relative p-8 pt-16 text-gray-300 h-full">
          <RiCloseLine onClick={toggleOrder} className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
          <h2 className="text-2xl mt-4">Orders #123155 </h2>
          {/* Pills */}
          <div className="flex items-center gap-4 flex-wraps">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
            <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
            <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
          </div>
          {/* CAR */}
          <div>
            <div className="grid grid-cols-6 mb-4 p-4">
              <h5 className=" col-span-4  ">Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
            {/* Products */}
            <div className="h-[250px] md:h-[700px] md:overflow-y-hidden overflow-y-scroll">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="platillo-1.png" alt="platillo" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spicy seasoned sea...</h5>
                    <p className="text-xs text-gray-500 mt-1">$2.29</p>
                  </div>
                </div>
                <div>
                  <span>2</span>
                </div>
                <div >
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input type="text" placeholder="Order..." className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none "/>
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500"/>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="platillo-1.png" alt="platillo" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spicy seasoned sea...</h5>
                    <p className="text-xs text-gray-500 mt-1">$2.29</p>
                  </div>
                </div>
                <div>
                  <span>2</span>
                </div>
                <div >
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input type="text" placeholder="Order..." className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none "/>
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500"/>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="platillo-1.png" alt="platillo" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spicy seasoned sea...</h5>
                    <p className="text-xs text-gray-500 mt-1">$2.29</p>
                  </div>
                </div>
                <div>
                  <span>2</span>
                </div>
                <div >
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input type="text" placeholder="Order..." className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none "/>
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500"/>
                  </button>
                </div>
              </div>
            </div>

            </div>
          </div>
          {/* SUBMIT PAYMENT */}
          <div className="bg-[#262837] p-4 absolute w-full bottom-0 left-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Discount</span>
              <span>$0s</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400" >Subtotal</span>
              <span>$200</span>
            </div>
            <div>
              <button className="bg-[#ec7c6a] w-full rounded-lg px-4 py-2 ">Continue to payment</button>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default App