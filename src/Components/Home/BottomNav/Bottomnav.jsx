const Bottomnav = () => {
  return (
    <div className="bg-[#002046] px-8 lg:px-28 flex justify-between py-16">
      <div className="w-full h-full">
        <img className="cursor-pointer" src="/websiteLogo.png" alt="" />
      </div>
      <div className="flex gap-6 text-lg">
        <p className="shrink-0 text-[#00bcd4] hover:text-[#b2ebf2] font-semibold cursor-pointer">
          Our Solutions
        </p>

        <div className="border-r-[1px]  border-[#80deea]"></div>
        <p className="text-[#00bcd4] cursor-pointer hover:text-[#b2ebf2] font-semibold">
          AnyCaaS
        </p>
        <p className="text-[#00bcd4] cursor-pointer hover:text-[#b2ebf2] font-semibold">
          AnyBaas
        </p>
        <p className="text-[#00bcd4] cursor-pointer hover:text-[#b2ebf2] font-semibold">
          AnyPaas
        </p>
      </div>
    </div>
  );
};

export default Bottomnav;
