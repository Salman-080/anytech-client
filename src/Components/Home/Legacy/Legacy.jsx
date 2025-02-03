const Legacy = () => {
  return (
    <div>
      <div
        className="bg-blue-800 px-8 lg:px-28 h-[520px] relative "
        style={{
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)", // উল্টানো ক্লিপ-পাথ
        }}
      >
        <div className="absolute top-0 right-[20%]">
          <img className="blur-xs" src="/legacyPattern2.png" alt="" />
        </div>
        <div className="absolute top-[10%] ">
          <img className="" src="/legacyPattern1.png" alt="" />
        </div>
        <div className="absolute top-[40%] text-white space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Legacy  no longer
          </h2>
          <p className="text-lg">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="bg-orange-400 px-9 py-3 text-xl cursor-pointer">Contact Us {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
