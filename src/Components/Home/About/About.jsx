import { useEffect, useRef } from "react";

const About = () => {
  const imageRefs = useRef([]);
  const animationFrame = useRef(null);
  const targetY = useRef([0, 0, 0, 0]);
  const currentY = useRef([0, 0, 0, 0]);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const images = imageRefs.current;
    const sensitivity = 0.15; // গতি কমবেশি করার জন্য
    const returnSpeed = 0.1; // ফেরার গতি

    const animate = () => {
      images.forEach((img, index) => {
        currentY.current[index] += (targetY.current[index] - currentY.current[index]) * returnSpeed;
        img.style.transform = `translateY(${currentY.current[index]}px)`;
      });
      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleScroll = (e) => {
      const delta = e.deltaY * sensitivity;
      
      // প্রতিটি ছবির জন্য আলাদা মাল্টিপ্লায়ার
      const multipliers = [-0.8, -0.6, -0.4, -0.2]; 
      
      targetY.current = targetY.current.map((val, i) => {
        const newVal = val + delta * multipliers[i];
        return Math.max(-50, Math.min(50, newVal)); // সীমা নির্ধারণ
      });

      // স্ক্রোল স্টপ ডিটেক্ট
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        targetY.current = [0, 0, 0, 0];
      }, 100);
    };

    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const setImageRef = (index) => (el) => {
    imageRefs.current[index] = el;
  };
  return (
    <div>
      <div className="px-8 lg:px-28">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-500">
              POWERING THE FUTURE OF FINANCE
            </h3>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-6xl">
              Uncovering new <br /> ways to delight <br /> customers
            </h1>
            <p className="text-sm lg:text-base font-semibold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-sm">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>

          <div className=" ">
            <div className=" border-amber-950 w-[200px] md:w-[380px] lg:w-[420px] h-[480px] relative">
              <div ref={setImageRef(0)} className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:-top-24 md:-left-28 -top-12 -left-20 lg:-top-28 lg:-left-32 opacity-40">
                <img
                  className="w-full h-full"
                  src="/frames/founder/3.svg"
                  alt=""
                />
              </div>
              <div ref={setImageRef(1)} className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:-top-12 md:-right-28 -top-12 -right-8 lg:-top-28 lg:-right-14 opacity-40">
                <img
                  className="w-full h-full"
                  src="/frames/founder/2.svg"
                  alt=""
                />
              </div>
              <div ref={setImageRef(2)} className="w-[100px] md:w-[200px] lg:w-[250px] absolute md:-bottom-10 md:left-0 bottom-28 left-0 lg:left-0 lg:-bottom-40 z-50">
                <img className="w-full h-full" src="/vector2.png" alt="" />
              </div>
              <div ref={setImageRef(3)} className=" absolute lg:-right-20 lg:bottom-4 md:-right-16 md:bottom-7 -right-12 bottom-2">
                <img className="w-full h-full" src="/Vector.png" alt="" />
              </div>

              <div className="absolute w-[300px] md:w-[340px] lg:w-[420px] h-[380px] md:h-[400px] lg:h-[480px] inset-0 ">
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
