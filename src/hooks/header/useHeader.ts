import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryRequest } from "../../api/mainFetcher";
import { CommonCategoryType } from "../../types/commonCategoryType";

const useHeader = () => {
  const [categoryItems, setCategoryItems] = useState<Array<CommonCategoryType>>(
    []
  );
  const [isItemMouseOver, setIsItemMouseOver] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { result } = await getCategoryRequest("/category");
      setCategoryItems(
        result.map((c: CommonCategoryType) => {
          return {
            id: c.id,
            name: c.name,
            path: c.path,
            children: c.children,
          };
        })
      );
    })();
  }, []);

  const handleLogoImageClick = () => {
    navigate("/");
  };

  const handleCategoryClick = (path: string) => () => {
    navigate(path);
  };

  const handleItemMouseOver = useCallback(() => {
    setIsItemMouseOver((prev) => !prev);
  }, [setIsItemMouseOver]);

  return {
    categoryItems,
    isItemMouseOver,
    handleLogoImageClick,
    handleCategoryClick,
    handleItemMouseOver,
  };
};

export default useHeader;
