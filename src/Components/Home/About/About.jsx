const About = () => {
  return (
    <div>
      <div className="px-8 lg:px-28">
        <div className="flex gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-500">
              POWERING THE FUTURE OF FINANCE
            </h3>
            <h1 className="font-semibold text-6xl">
              Uncovering new <br /> ways to delight <br /> customers
            </h1>
            <p className="text-base font-semibold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-base">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>

          <div className=" ">
            <div className=" border-amber-950 w-[200px] md:w-[380px] lg:w-[420px] h-[480px] relative">
              <div className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:-top-24 md:-left-28 -top-12 -left-20 lg:-top-28 lg:-left-32 opacity-40">
                <img
                  className="w-full h-full"
                  src="/frames/founder/3.svg"
                  alt=""
                />
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:-top-12 md:-right-28 -top-12 -right-8 lg:-top-28 lg:-right-14 opacity-40">
                <img
                  className="w-full h-full"
                  src="/frames/founder/2.svg"
                  alt=""
                />
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:bottom-36 md:left-0 bottom-28 left-0 lg:left-0 lg:-bottom-40 z-50">
                <img className="w-full h-full" src="/vector2.png" alt="" />
              </div>
              <div className=" absolute lg:-right-20 lg:bottom-4 md:-right-16 md:bottom-3 -right-12 bottom-2">
                <img className="w-full h-full" src="/Vector.png" alt="" />
              </div>

              <div className="absolute w-[200px] md:w-[380px] lg:w-[420px] h-[480px] inset-0 ">
                <img className="w-full h-full" src="/boxImg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="/bgLine.png" alt="" />
      </div>
    </div>
  );
};

export default About;
