import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Philosophy = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-xl text-blue-500 font-semibold">
        Our Philosophy
      </h1>
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
        Human-centred innovation
      </h2>

      <div className="flex px-2 md:px-8 lg:px-28 gap-16  relative">
        <div className=" w-full h-[500px] md:h-[350px] bg-[#e4f5ff] relative rounded-2xl">
          <div className="absolute top-[2%] md:top-[27%] left-[25%] md:left-[2%] lg:left-[5%] space-y-4">
            <div className="bg-white text-center px-4 md:px-5 lg:px-20 py-1 md:py-6 shadow-[0_15px_6px_rgba(59,130,246,0.3)] rounded-2xl space-y-1 md:space-y-3">
              <p className="font-bold text-xs text-blue-600">CORE TECH</p>
              <p className="font-semibold text-xl md:text-2xl text-center text-gray-600">
                Artificial <br /> Intelligence
              </p>
            </div>
            <p className="text-xs text-center text-gray-600">
              Using Ai,Ml to upgrade legacy process, <br /> reduce cost, and
              improve efficiency
            </p>
          </div>

          <div>
            <div
              className="border-[22px] w-[3%] absolute top-0 left-[36%] h-[36%] rounded-b-2xl border-white hidden md:block"
              style={{ boxShadow: "0px 6px 10px -4px rgba(59,130,246,0.3)" }}
            ></div>
            <div className="absolute top-[29%] md:top-[38%] left-[47%] md:left-[37%]">
              <img
                className="rotate-180 md:rotate-90"
                src="/icons/easy-banking/Line1.svg"
                alt=""
              />
            </div>
            <div
              className="border-[22px] w-[3%] bottom-0 absolute left-[36%] h-[36%] rounded-t-2xl border-white hidden md:block"
              style={{ boxShadow: "0px -6px 10px -4px rgba(59,130,246,0.3)" }}
            ></div>
          </div>

          <div>
            <div className="absolute top-[47%] md:top-[35%] left-[25%] md:left-[45%] space-y-4 flex lg:flex-col items-center lg:items-start space-x-3">
              <div className="bg-white px-9 py-5 shadow-[0_15px_6px_rgba(59,130,246,0.3)] rounded-2xl space-y-1 text-center">
                <p className="font-bold text-xs text-orange-400">Mechanism</p>
                <p className="font-semibold text-2xl text-center text-gray-600">
                  Blockchain
                </p>
              </div>
              <p className="text-gray-600 text-xs">
                Enhanced security by <br /> eliminating intermediaries
              </p>
            </div>
          </div>

          <div className="absolute top-[64%] md:top-[15%] right-[53%] md:right-[38%] lg:right-[33%]">
            <img className="rotate-90 md:rotate-270 w-[37px] md:w-[75px] h-[65px]" src="/icons/easy-banking/Line3.svg" alt="" />
          </div>

          <div className="absolute bottom-[23%] md:bottom-[20%] right-[40%] md:right-[38%] lg:right-[33%]">
            <img className="rotate-270 w-[40px] md:w-[75px] h-[65px]" src="/icons/easy-banking/Line2.svg" alt="" />
          </div>

          <div className="absolute top-[67%] md:top-[5px] lg:top-[10%] right-[63%] md:right-[1%] lg:right-[9%] md:flex md:items-center gap-3">
            <div className="bg-white px-9 py-5 shadow-[0_15px_6px_rgba(59,130,246,0.3)] rounded-2xl space-y-1">
              <p className="font-bold text-xs text-cyan-400">Infrastructure</p>
              <p className="font-semibold text-2xl text-center text-gray-600">
                Cloud
              </p>
            </div>
            <p className="text-gray-600 text-xs text-center md:text-start mt-2 md:mt-0">
              Scale resources <br /> easily on demand
            </p>
          </div>

          <div className="absolute bottom-[3%] md:bottom-[7%] lg:bottom[10%] right-[1px] lg:right-[8%]  md:flex md:items-center gap-3">
            <div className="bg-white px-12 py-5 shadow-[0_15px_6px_rgba(59,130,246,0.3)] space-y-1 rounded-2xl">
              <p className="font-bold text-xs text-yellow-400">Resource</p>
              <p className="font-semibold text-2xl text-center text-gray-600">
                Data
              </p>
            </div>
            <p className="text-gray-600 text-xs text-center md:text-start mt-2 md:mt-0">
              Valuable, actionable <br /> insights from mass <br /> data
              sourcess
            </p>
          </div>
        </div>
        
      </div>

      
      <br />
      <br />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-36">
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl " data-aos="fade-up"
     data-aos-duration="3000"  data-aos-delay="0">
          <div>
            <img src="/icon1.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold ">Full-suite solutions</h2>
          <p className="text-base">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl" data-aos="fade-up"
     data-aos-duration="3000"  data-aos-delay="300">
          <div>
            <img src="/icon2.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold">Full-suite solutions</h2>
          <p className="text-base">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl" data-aos="fade-up"
     data-aos-duration="3000"  data-aos-delay="600">
          <div>
            <img src="/icon3.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold">Full-suite solutions</h2>
          <p className="text-base">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
