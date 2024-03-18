// DataContext.js
import React, { createContext, useContext, useState } from "react";
import DietaryIcons from "../assets/DietaryIcons";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [city, setCity] = useState("Philadelphia");
  const [restaurantData, setRestaurantData] = useState([]);
  const [term, setTerm] = useState("restaurants");
  const [limit, setLimit] = useState();
  const [radius, setRadius] = useState(1000);
  const [price, setPrice] = useState();
  const [filter, setFilter] = useState([]);
  const [select, setSelect] = useState("inactive");
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectedRestriction, setSelectedRestriction] = useState([]);


  const buddiesInfo = [
    {
      name: "Emily Smith",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-1.png"),
      restrictions: '',
    },
    {
      name: "Emily Smith",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-1.png"),
      restrictions: '',
    },
    {
      name: "Emily Smith",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-1.png"),
      restrictions: '',
    },
    {
      name: "Emily Smith",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-1.png"),
      restrictions: '',
    },
  ];

  const allergyArr = [
    {
      name: "Wheat",
      icon: DietaryIcons.WheatSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Peanut",
      icon: DietaryIcons.PeanutSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Dairy",
      icon: DietaryIcons.DairySolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Egg",
      icon: DietaryIcons.EggSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Sesame",
      icon: DietaryIcons.SesameSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Soy",
      icon: DietaryIcons.SoySolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Fish",
      icon: DietaryIcons.FishSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Shellfish",
      icon: DietaryIcons.ShellfishSolid ,
      dietaryType: "allergy",
      type: select,
    },
    {
      name: "Treenut",
      icon: DietaryIcons.TreenutSolid,
      dietaryType: "allergy",
      type: select,
    },
  ]

  const dietArr = [
    {
      name: "Halal",
      icon: DietaryIcons.HalalSolid ,
      dietaryType: "diet",
      type: select,
    },
    {
      name: "Vegan",
      icon: DietaryIcons.VeganSolid ,
      dietaryType: "diet",
      type: select,
    },
    {
      name: "Vegetarian",
      icon: DietaryIcons.VegetarianSolid ,
      dietaryType: "diet",
      type: select,
    },
    {
      name: "keto",
      icon: DietaryIcons.KetoSolid ,
      dietaryType: "diet",
      type: select,
    },
  ]
  // const setRestaurantData = (data) => {
  //   setInternalRestaurantData(data);
  // };

  return (
    <DataContext.Provider
      value={{
        city,
        setCity,
        restaurantData,
        setRestaurantData,
        term,
        setTerm,
        limit,
        setLimit,
        radius,
        setRadius,
        price,
        setPrice,
        filter,
        setFilter,
        select, setSelect,
        selectedItems, setSelectedItems,
        selectedRestriction, setSelectedRestriction,
        allergyArr,
        dietArr
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
