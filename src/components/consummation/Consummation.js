import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/appContext";
import styles from "./styles.module.css";

export const Consummation = (props) => {
  const { people, products, addConsumer } = useContext(AppContext);

  const [click, setClick] = useState(false);

  console.log("products: ", products);

  const buttonProduct = (person, product) => {
    addConsumer(person, product);
    setClick(!click);
  };

  const changeStyle = (name, item) => {
    const find = products.find((f) => f.name === item.name);

    return find.people.includes(name) ? styles.active : styles.notAtive;
  };

  return (
    <div>
      {props.next && (
        <div>
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
        </div>
      )}
    </div>
  );
};
