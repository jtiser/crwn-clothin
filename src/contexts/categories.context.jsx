import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = {
    categoriesMap: categoriesMap,
  };
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
