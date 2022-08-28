import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const [products, setProducts] = useState([]);

  const savePeople = (name) => {
    setPeople([...people, name]);
  };

  const saveProduct = (product) => {
    setProducts([...products, product]);
  };

  const addConsumer = (name, product) => {
    const productSelected = products.find((f) => f.name === product.name);

    const newPeople = [...productSelected.people, name];

    productSelected.people = newPeople;
  };

  return (
    <AppContext.Provider
      value={{ people, savePeople, products, saveProduct, addConsumer }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
