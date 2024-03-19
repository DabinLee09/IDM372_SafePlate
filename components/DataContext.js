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
  const [buddyPick, setBuddyPick] = useState();

  const [selectedRestriction, setSelectedRestriction] = useState([]);


  const buddiesInfoArr = [
    {
      name: "Emily",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-1.png"),
      restrictions: '',
    },
    {
      name:"Gianna",
      username:"@gianna123",
      image: require('../assets/images/avatars/avt-2.png'),
      restrictions: '',
    },
    {
      name:"Cheryl",
      username:"@cheryl123",
      image: require("../assets/images/avatars/avt-3.png"),
      restrictions: '',
    },
    {
      name: "Dabin",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-4.png"),
      restrictions: '',
    },
    {
      name:"Cindy",
      username:"@cindyl123",
      image: require("../assets/images/avatars/avt-5.png"),
      restrictions: '',
    },
    {
      name: "Emily",
      username: "@emilysmith",
      image: require("../assets/images/avatars/avt-6.png"),
      restrictions: '',
    },
    {
      name:"Cheryl",
      username:"@cheryl123",
      image: require("../assets/images/avatars/avt-4.png"),
      restrictions: '',
    },
    {
      name: "",
      username: "",
      image: require("../assets/images/avatars/addbtn.png"),
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


  // Function to filter items from dietArr and allergyArr based on selectedRestriction
const getFilteredItems = (selectedRestriction) => {
  // Initialize an empty array to store filtered items
  const filteredItems = [];

  // Iterate through each item in selectedRestriction
  selectedRestriction.forEach((restriction) => {
      // Find matching items from dietArr and allergyArr
      const dietItem = dietArr.find((item) => item.name === restriction);
      const allergyItem = allergyArr.find((item) => item.name === restriction);

      // If a matching item is found in dietArr, push it to filteredItems
      if (dietItem) {
          filteredItems.push(dietItem);
      }

      // If a matching item is found in allergyArr, push it to filteredItems
      if (allergyItem) {
          filteredItems.push(allergyItem);
      }
  });

  return filteredItems;
};

// Call the function to get the filtered items
const filteredItems = getFilteredItems(selectedRestriction);




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
        buddyPick, setBuddyPick,
        allergyArr,
        dietArr,
        buddiesInfoArr,
        filteredItems,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
