import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const swiperRef = useRef(null);

  const tabTexts = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTab((prev) => (prev + 1) % 4);
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  console.log(swiperRef.current);
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.stop();
      swiper.slideToLoop(index); // লুপ মোডে নিরাপদ নেভিগেশন
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-5">
      <h2 className="text-center text-lg text-[#1a79e7] font-semibold">TECHNOLOGY BUILT FOR YOU</h2>
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold">The future of finance</h1>

        <div className="flex gap-5  w-fit mx-auto">
          {tabTexts?.map((tabTexts, index) => (
            <div
              onClick={() => handleTabClick(index)}
              key={index}
              className={`hover:bg-blue-300 px-8 rounded-3xl text-xl py-3 cursor-pointer text-[#1a79e7] font-semibold ${
                activeTab === index ? "bg-blue-300" : "bg-[#eeeeee]"
              } `}
            >
              {tabTexts}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-28">
       
        <Swiper
          className="mySwiper"
          spaceBetween={50}
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop={true}
          // onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          onSlideChangeTransitionEnd={(swiper) => {
            setActiveTab(swiper.realIndex);
          }}
          onTouchStart={(swiper) => {
            swiper.autoplay.stop();
          }}
          ref={swiperRef}
        >
          <SwiperSlide className="flex px-12 py-12 gap-4">
            <div className="space-y-8 text-left lg:w-[50%]">
              <h2 className="text-xl text-[#1a79e7] font-semibold">
                Customer Focused
              </h2>
              <h1 className="text-4xl font-semibold text-gray-700">
                Purpose-built financial service
              </h1>
              <p className="font-semibold text-gray-700">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behaviour and product marketing opportunities.
              </p>
            </div>
            <div className=" h-[400px] lg:w-[50%] ">
              <img
                className="w-full h-full rounded-2xl"
                src="/sliderImg2.JPG"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex px-12 py-12 gap-4">
            <div className="space-y-8 text-left lg:w-[50%]">
              <h2 className="text-xl text-[#1a79e7] font-semibold">
                Customer Focused
              </h2>
              <h1 className="text-4xl font-semibold text-gray-700">
                Purpose-built financial service
              </h1>
              <p className="font-semibold text-gray-700">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behaviour and product marketing opportunities.
              </p>
            </div>
            <div className=" h-[400px] lg:w-[50%] ">
              <img
                className="w-full h-full rounded-2xl"
                src="/sliderImg1.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex px-12 py-12 gap-4">
            <div className="space-y-8 text-left lg:w-[50%]">
              <h2 className="text-xl text-[#1a79e7] font-semibold">
                Customer Focused
              </h2>
              <h1 className="text-4xl font-semibold text-gray-700">
                Purpose-built financial service
              </h1>
              <p className="font-semibold text-gray-700">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behaviour and product marketing opportunities.
              </p>
            </div>
            <div className=" h-[400px] lg:w-[50%] ">
              <img
                className="w-full h-full rounded-2xl"
                src="/sliderImg3.JPG"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex px-12 py-12 gap-4">
            <div className="space-y-8 text-left lg:w-[50%]">
              <h2 className="text-xl text-[#1a79e7] font-semibold">
                Customer Focused
              </h2>
              <h1 className="text-4xl font-semibold text-gray-700">
                Purpose-built financial service
              </h1>
              <p className="font-semibold text-gray-700">
                Elevate customer experience and achieve agile financial product
                innovation with the world’s first, consumer-centric, real-time
                transaction account processing and credit limit system.
              </p>
              <p className="text-gray-600">
                Experience the advantages of integrated retail financial
                services technology, real-time analysis of transactional
                behaviour and product marketing opportunities.
              </p>
            </div>
            <div className=" h-[400px] lg:w-[50%] ">
              <img
                className="w-full h-full rounded-2xl"
                src="/sliderImg4.JPG"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <img src="/bgLine.png" alt="" />
      </div>
    </div>
  );
};

export default Slider;
