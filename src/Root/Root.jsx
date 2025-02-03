import { useEffect } from "react";
import { Outlet } from "react-router";

const Root = () => {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    const handleBeforeUnload = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      sessionStorage.setItem("scrollPosition", scrollPosition);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className="max-w-[2000px] mx-auto overflow-x-hidden bg-white">
      <Outlet></Outlet>


      
    </div>
  );
};

export default Root;
