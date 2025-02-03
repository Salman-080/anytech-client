const Philosophy = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-xl text-blue-500 font-semibold">
        Our Philosophy
      </h1>
      <h2 className="text-center text-6xl font-semibold">
        Human-centred innovation
      </h2>

      {/* <div className="flex  px-8 lg:px-28 gap-16">
        <div className="w-[280px] md:w-[450px]  h-[300px] mx-auto relative">
          <img
            className="mx-auto border w-full h-full"
            src="/Item.png"
            alt=""
          />
          <div className="absolute inset-0 w-[70%] h-[50%] rounded-xl my-auto mx-auto shadow-[0_15px_6px_rgba(59,130,246,0.3)] bg-white flex flex-col justify-center items-center space-y-1">
            <p className="font-bold text-xs text-blue-600">CORE TECH</p>
            <p className="font-semibold text-3xl text-center text-gray-600">
              Artificial <br /> Intelligence
            </p>
          </div>
        </div>
        <div className="w-[380px] md:w-[600px] h-[300px] mx-auto">
          <img
            className="mx-auto border w-full h-full"
            src="/Item.png"
            alt=""
          />
        </div>
      </div> */}

      <div className="px-8 lg:px-28">
        <img src="/diagram.png" alt="" />
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
