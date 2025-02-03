const Abc = () => {
  return (
    <div>
      <div
        className="bg-red-700 w-[600px] h-[400px] ml-14 mt-28"
        style={{
          clipPath: "polygon(70% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%)", // Sharp diagonal cut
        }}
      >
        
        <img className="w-full h-full object-cover scale-110 animate-slide" src="/banner_image.png" alt="" />
        
       
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: scale(1.1) translateX(0);
          }
          100% {
            transform: scale(1.1) translateX(-8%);
          }
        }
        .animate-slide {
          animation: slide 10s ease-out forwards;
        }
      `}</style>

    </div>
  );
};

export default Abc;
