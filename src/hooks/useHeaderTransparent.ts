import { useState, useEffect } from "react";

const useHeaderTransparent = (standard: number = 50) => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  const handleScrollEvent = () => {
    if (window.scrollY >= standard) setIsHeaderTransparent(false);
    else setIsHeaderTransparent(true);
    console.log("hello");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTimeout(() => {
        handleScrollEvent();
      }, 500);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isHeaderTransparent, setIsHeaderTransparent]);

  return { isHeaderTransparent };
};

export default useHeaderTransparent;
