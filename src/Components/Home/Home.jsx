import { useEffect, useRef, useState } from "react";
import About from "./About/About";
import Philosophy from "./Philosophy/Philosophy";
import Slider from "./Slider/Slider";
import Stats from "./Stats/Stats";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import Partner from "./Partner/Partner";
import Bottomnav from "./BottomNav/Bottomnav";
import Footer from "./Footer/Footer";
import Legacy from "./Legacy/Legacy";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const prevScrollValue = useRef(0);
  const [dropDown, setDropDown] = useState(false);

  const [langDropDown, setLangDropDown] = useState(false);
  const langDivRef=useRef();

  useEffect(() => {
    const handleScrollValue = () => {
      const currentScrollValue =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollValue === 0) {
        setShowNavbar(false);
      } else if (currentScrollValue >= 455) {
        if (currentScrollValue < prevScrollValue.current) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(false);
      }
      console.log(currentScrollValue);

      prevScrollValue.current = currentScrollValue;
    };

    window.addEventListener("scroll", handleScrollValue);
    return () => window.removeEventListener("scroll", handleScrollValue);
  }, []);


  useEffect(()=>{

    const handleOutsideClick=(event)=>{
      if(langDivRef?.current && !langDivRef?.current?.contains(event.target)){
        setLangDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return ()=> document.removeEventListener("mousedown", handleOutsideClick);
  },[])
  return (
    <div className="relative">
      {/* banner */}
      <div
        className={`bg-white w-full px-8 lg:px-28 top-0  z-50 py-6 transition-all duration-300 fixed text-blue-500 ${
          !showNavbar ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="flex justify-between items-center ">
            <h2 className="text-4xl font-extrabold cursor-pointer">AnyTech</h2>
            <div>
              <ul className="flex gap-12 justify-center items-center">
                <li
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                  className="cursor-pointer text-lg flex items-center gap-2 relative"
                >
                  Solutions <IoIosArrowDown></IoIosArrowDown>
                  {dropDown && (
                    <div className="cursor-pointer flex flex-col gap-2 space-y-1 absolute top-[110%] text-black bg-white items-center py-2 rounded-md">
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyCaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyBaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyPaas
                      </h4>
                    </div>
                  )}
                </li>
                <li className="text-lg cursor-pointer">Services</li>
                <li className="text-lg cursor-pointer">About Us</li>
                <li ref={langDivRef}
                  onClick={() => setLangDropDown(!langDropDown)}
                  className="cursor-pointer text-lg border rounded-3xl px-4 py-1 flex justify-center items-center gap-2"
                >
                  <TbWorld />
                  EN <IoIosArrowDown className={`duration-200 ${langDropDown ? "rotate-180" : ""}`}></IoIosArrowDown>
                  {langDropDown && (
                    <div onClick={(e) => e.stopPropagation()}  className=" flex flex-col gap-2 space-y-1 absolute top-[80%] text-black bg-white items-center py-2 rounded-md">
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyCaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className=" pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyBaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4  className=" pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyPaas
                      </h4>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <button className="cursor-pointer text-lg border rounded-lg px-8 py-2 bg-orange-400 text-white hover:shadow-black hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] hover:border-orange-400">
              Contact Us {">"}
            </button>
          </div>
      </div>

      <div
        className="bg-blue-900 h-[300px] md:h-[800px] lg:h-[620px] relative "
        style={{
          clipPath: "polygon(0 100%, 100% 91%, 100% 0, 0 0)", // Adjusted clip-path
        }}
      >
        <div className="absolute w-full px-8 lg:px-28 top-0 text-white z-50 py-6">
          <div className="flex justify-between items-center ">
            <h2 className="text-4xl font-extrabold cursor-pointer">AnyTech</h2>
            <div>
              <ul className="flex gap-12 justify-center items-center">
                <li
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                  className="cursor-pointer text-lg flex items-center gap-2 relative"
                >
                  Solutions <IoIosArrowDown></IoIosArrowDown>
                  {dropDown && (
                    <div className="cursor-pointer flex flex-col gap-2 space-y-1 absolute top-[110%] text-black bg-white items-center py-2 rounded-md">
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyCaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyBaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyPaas
                      </h4>
                    </div>
                  )}
                </li>
                <li className="text-lg cursor-pointer">Services</li>
                <li className="text-lg cursor-pointer">About Us</li>
                <li ref={langDivRef}
                  onClick={() => setLangDropDown(!langDropDown)}
                  className="cursor-pointer text-lg border rounded-3xl px-4 py-1 flex justify-center items-center gap-2"
                >
                  <TbWorld />
                  EN <IoIosArrowDown className={`duration-200 ${langDropDown ? "rotate-180" : ""}`}></IoIosArrowDown>
                  {langDropDown && (
                    <div onClick={(e) => e.stopPropagation()}  className=" flex flex-col gap-2 space-y-1 absolute top-[80%] text-black bg-white items-center py-2 rounded-md">
                      <h4 className="pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyCaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4 className=" pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyBaas
                      </h4>
                      <hr className="w-full text-gray-200" />
                      <h4  className=" pl-3 pr-16 text-gray-800 cursor-pointer">
                        AnyPaas
                      </h4>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <button className="cursor-pointer text-lg border rounded-sm px-8 py-2">
              Contact Us {">"}
            </button>
          </div>
        </div>

        <div className=" absolute z-30 flex w-full lg:h-[300px] ">
          <img
            className="w-[50%] object-cover movementone scale-200"
            src="/backgrounds/foreground2.png"
            alt=""
          />
          <img
            className="w-[25%] object-cover movementone "
            src="/backgrounds/WaveLinesDesktop1.svg"
            alt=""
          />
          <img
            className="w-[25%] object-cover movementtwo "
            src="/backgrounds/foreground.png"
            alt=""
          />
        </div>
        <div className="absolute left-24 top-36 z-40 space-y-6">
          <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-8xl">
            Embrace the <br /> future of finance
          </h1>
          <p className="font-semibold text-white text-xl">
            Reimagine financial services with AnyTech’s open platform,
            distributed <br /> banking solution that powers transformation
          </p>
          <button className="bg-orange-400 px-11 py-3 font-semibold text-xl text-white">
            Reach Out Us {">"}
          </button>
        </div>
        <div
          className="h-[300px] md:h-[800px] lg:h-full absolute right-0 bg-red-600"
          style={{
            clipPath: "polygon(70% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%)", // Sharp diagonal cut
          }}
        >
          <img
            className="h-full w-full object-cover movement "
            src="/banner_image.png"
            alt=""
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-600 to-transparent opacity-70" style={{ height: '30%' }}></div> */}
          {/* <div className="absolute right-0 top-0 bg-gradient-to-r from-transparent via-blue-700 to-blue-800  opacity-70 w-[40%]" style={{ height: '25%' }}></div> */}

          <div className="bg-blue-500 w-[300px] h-[100px] blur-[70px] absolute top-0 right-0"></div>
          <div className="bg-blue-500 w-[300px] h-[100px] blur-[70px] absolute top-0 right-0"></div>
          <div className="bg-blue-500 w-[300px] h-[100px] blur-[70px] absolute top-0 right-0"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: scale(1.1) translateX(0);
          }
          100% {
            transform: scale(1.1) translateX(-4%);
          }
        }
        .movement {
          animation: slide 1s ease-out forwards;
        }
      `}</style>
      <style>{`
        @keyframes slideone {
          0% {
            transform: scale(1.1) translateX(0%);
          }
          100% {
            transform: scale(1.1) translateX(-5%);
          }
        }
        .movementone {
          animation: slideone 2s ease-out forwards;
        }
      `}</style>
      <style>{`
        @keyframes slidetwo {
          0% {
            transform: scale(1.1) translateX(0);
          }
          100% {
            transform: scale(1.1) translateX(-2%);
          }
        }
        .movementtwo {
          animation: slidetwo 1s ease-out forwards;
        }
      `}</style>

      <div className="mt-24 ">
        <About></About>
      </div>
      <div className="mt-24 ">
        <Philosophy></Philosophy>
      </div>
      <div className="mt-24 ">
        <Slider></Slider>
      </div>
      <div className="mt-24 ">
        <Stats></Stats>
      </div>
      <div className="mt-24 ">
        <Partner></Partner>
      </div>
      <div className="mt-24 ">
        <Legacy></Legacy>
      </div>
      <div className="">
        <Bottomnav></Bottomnav>
      </div>
      <div className="border-t-[1px] border-[#80deea] ">
        <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Home;
