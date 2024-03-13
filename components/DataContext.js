// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [city, setCity] = useState('Philadelphia');
  const [restaurantData, setRestaurantData] = useState([]);
  const [ term, setTerm ] = useState('restaurants');
  const [ limit, setLimit] = useState();
  const [radius, setRadius] = useState(1000);
  const [price, setPrice] = useState();
  const [ filter, setFilter ] = useState([]);


  // const setRestaurantData = (data) => {
  //   setInternalRestaurantData(data);
  // };

  return (
    <DataContext.Provider value={{ 
      city, setCity, restaurantData, setRestaurantData,
      term, setTerm,
      limit, setLimit,
      radius, setRadius,
      price, setPrice,
      filter, setFilter,
      }}>
      {children}
    </DataContext.Provider>
  );
};
