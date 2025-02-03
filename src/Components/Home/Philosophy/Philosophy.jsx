const Philosophy = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-xl text-blue-500 font-semibold">
        Our Philosophy
      </h1>
      <h2 className="text-center text-6xl font-semibold">
        Human-centred innovation
      </h2>

      <div className="flex  px-8 lg:px-28 gap-16  relative">
        <div className=" w-full h-[350px] bg-[#e4f5ff] relative rounded-2xl">
          <div className="absolute top-[27%] left-[2%] lg:left-[5%] space-y-4">
            <div className="bg-white text-center px-4 md:px-5 lg:px-20 py-6 shadow-[0_15px_6px_rgba(59,130,246,0.3)] rounded-2xl space-y-3">
              <p className="font-bold text-xs text-blue-600">CORE TECH</p>
              <p className="font-semibold text-2xl text-center text-gray-600">
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
              className="border-[22px] w-[3%] absolute top-0 left-[36%] h-[36%] rounded-b-2xl border-white"
              style={{ boxShadow: "0px 6px 10px -4px rgba(59,130,246,0.3)" }}
            ></div>
            <div className="absolute top-[38%] left-[37%]">
              <img
                className="rotate-90"
                src="/icons/easy-banking/Line1.svg"
                alt=""
              />
            </div>
            <div
              className="border-[22px] w-[3%] bottom-0 absolute left-[36%] h-[36%] rounded-t-2xl border-white "
              style={{ boxShadow: "0px -6px 10px -4px rgba(59,130,246,0.3)" }}
            ></div>
          </div>

          <div>
            <div className="absolute top-[35%] left-[45%] space-y-4 flex lg:flex-col items-center lg:items-start space-x-3">
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

          <div className="absolute top-[15%] right-[38%] lg:right-[33%]">
            <img className="rotate-270 w-[75px] h-[65px]" src="/icons/easy-banking/Line3.svg" alt="" />
          </div>

          <div className="absolute bottom-[20%] right-[38%] lg:right-[33%]">
            <img className="rotate-270 w-[75px] h-[65px]" src="/icons/easy-banking/Line2.svg" alt="" />
          </div>

          <div className="absolute top-[5px] lg:top-[10%] right-[1%] lg:right-[5%] flex items-center gap-3">
            <div className="bg-white px-9 py-5 shadow-[0_15px_6px_rgba(59,130,246,0.3)] rounded-2xl space-y-1">
              <p className="font-bold text-xs text-cyan-400">Infrastructure</p>
              <p className="font-semibold text-2xl text-center text-gray-600">
                Cloud
              </p>
            </div>
            <p className="text-gray-600 text-xs">
              Scale resources <br /> easily on demand
            </p>
          </div>

          <div className="absolute bottom-[7%] lg:bottom[10%] right-[1px] lg:right-[8%] flex items-center gap-3">
            <div className="bg-white px-12 py-5 shadow-[0_15px_6px_rgba(59,130,246,0.3)] space-y-1 rounded-2xl">
              <p className="font-bold text-xs text-yellow-400">Resource</p>
              <p className="font-semibold text-2xl text-center text-gray-600">
                Data
              </p>
            </div>
            <p className="text-gray-600 text-xs">
              Valuable, actionable <br /> insights from mass <br /> data
              sourcess
            </p>
          </div>
        </div>
        
      </div>

      
      <br />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-36">
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl">
          <div>
            <img src="/icon1.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold ">Full-suite solutions</h2>
          <p className="text-base">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl">
          <div>
            <img src="/icon2.png" alt="" />
          </div>
          <h2 className="text-xl font-semibold">Full-suite solutions</h2>
          <p className="text-base">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-[#f8fcff] px-7 py-8 space-y-5 rounded-xl">
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
