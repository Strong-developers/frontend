import { useState, useEffect, useMemo } from "react";

const scrollBarWidth = 0;

const useImageSlider = (imageArray: Array<string>) => {
  const [width, setWidth] = useState(window.innerWidth - scrollBarWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const imageUrls = useMemo(
    () =>
      imageArray.map((img) => {
        return {
          url: `../src/assets/images/${img}`,
        };
      }),
    [imageArray]
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth - scrollBarWidth);
      setHeight(window.innerHeight);
    });
    return () => {
      setWidth(window.innerWidth - scrollBarWidth);
      setHeight(window.innerHeight);
    };
  }, []);

  return {
    width,
    height,
    imageUrls,
  };
};

export default useImageSlider;
