import { useEffect, useState } from "react";
import { useSpring, animated, useInView } from "react-spring";

const Stats = () => {
  const [ref, springs] = useInView(
    () => ({
      from: { num1: 0, num2: 0, num3: 0 },
      to: { num1: 40, num2: 50, num3: 200 },
      delay: 2000,
      config: { mass: 1, tension: 20, friction: 10 },
    }),
    { once: true }
  );

  console.log(ref);
  console.log(springs);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-center text-[#1a79e7]">TRUSTED BY THE BEST</h2>
      <div ref={ref} className="text-3xl flex w-fit mx-auto gap-32 ">
        <div className="space-y-2">
          <animated.div className="text-md md:text-8xl text-[#0960c9] font-bold">{springs.num1.to((n) => `>${n.toFixed(0)}`)}</animated.div>
          <p className="text-[18px] text-center">Years of Experience</p>
        </div>
        <div className="space-y-2">
          <animated.div className="text-md md:text-8xl text-[#0960c9] font-bold">{springs.num2.to((n) => `${n.toFixed(0)}+`)}</animated.div>
          <p className="text-[18px] text-center"> Financial Institutions

</p>
        </div>
        <div className="space-y-2">
          <animated.div className="text-md md:text-8xl text-[#0960c9] font-bold">{springs.num3.to((n) => `>${n.toFixed(0)}`)}</animated.div>
          <p className="text-[18px] text-center">Customers Each

</p>
        </div>

        
      </div>

      {/* <animated.div>{num1.to((n) => n.toFixed(0))}</animated.div> */}
    </div>
  );
};

export default Stats;
