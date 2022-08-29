import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/appContext";
import styles from "./styles.module.css";

export const Consummation = (props) => {
  const { people, products, addConsumer, saveConsumption } =
    useContext(AppContext);

  const [click, setClick] = useState(false);

  const buttonProduct = (person, product) => {
    addConsumer(person, product);
    setClick(!click);
  };

  const changeStyle = (name, item) => {
    const find = products.find((f) => f.name === item.name);

    return find.people.includes(name) ? styles.active : styles.notActive;
  };

  const calculateDividedValue = () => {
    products.map((product) => {
      let amoutOfPeople = Object.keys(product.people).length;
      let dividedValue = (product.value * product.number) / amoutOfPeople;
      product["dividedValue"] = dividedValue;
    });
  };

  const clickedNext = () => {
    calculateDividedValue();
    saveConsumption();
    props.setNext(3);
  };

  return (
    <div>
      {props.next === 2 && (
        <div className={styles.container}>
          <fieldset>
            <legend>Clique nos produtos que cada pessoa consumiu:</legend>
            {people.map((person, index) => {
              return (
                <div key={index} className={styles.fieldsetTwo}>
                  <div className={styles.name}>
                    {person[0].toUpperCase() + person.substr(1)}:
                  </div>
                  {products.map((item, index) => {
                    return (
                      <div className={styles.product} key={index}>
                        <button
                          onClick={() => buttonProduct(person, item)}
                          className={changeStyle(person, item)}
                        >
                          {item.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </fieldset>
          <div className={styles.divButton}>
            <button onClick={clickedNext}>Próximo</button>
          </div>
        </div>
      )}
    </div>
  );
};
