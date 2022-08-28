import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const [products, setProducts] = useState([]);

  const [personAndConsumption, setPersonAndConsumption] = useState([]);

  const savePeople = (name) => {
    setPeople([...people, name]);
  };

  const saveProduct = (product) => {
    setProducts([...products, product]);
  };

  const saveConsumption = () => {
    let calcConsumption = [];
    products.map((product) => {
      product.people.map((pessoa) => {
        if (product.people.indexOf(pessoa) >= 0) {
          let personIndex = product.people.indexOf(pessoa);

          let obj = calcConsumption.find((item) => item.name == pessoa);
          if (obj) {
            obj.consumption = obj.consumption + product.dividedValue;
          } else {
            calcConsumption.push({
              name: product.people[personIndex],
              consumption: product.dividedValue,
              tip: false,
            });
          }
        }
      });
    });
    setPersonAndConsumption(calcConsumption);
  };

  const changeTip = (person, isTip) => {
    let teste = personAndConsumption.find(
      (people) => people.name == person.name
    );
    teste.tip = isTip;
  };

  const addConsumer = (name, product) => {
    const productSelected = products.find((f) => f.name === product.name);

    const newPeople = [...productSelected.people, name];

    productSelected.people = newPeople;
  };

  return (
    <AppContext.Provider
      value={{
        people,
        savePeople,
        products,
        saveProduct,
        addConsumer,
        saveConsumption,
        personAndConsumption,
        changeTip,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
