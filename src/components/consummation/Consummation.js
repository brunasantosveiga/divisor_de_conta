import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Consummation = (props) => {
  useEffect(() => {
    console.log(props.product);
  }, [props.product]);

  const buttonProduct = (person, item, id) => {
    const products = [...props.product];

    const selectedProduct = products.find((f) => f.id === id);

    selectedProduct.people.push(person);

    console.log(props.product);
  };

  const changeStyle = (name) => {
    const isClicked = props.product.find((f) => f.people.includes(name));
    return isClicked ? styles.active : styles.notActive;
  };

  return (
    <div>
      {props.next && (
        <div>
          <fieldset>
            <legend>Clique nos produtos que cada pessoa consumiu:</legend>
            {props.names.map((person, index) => {
              return (
                <div key={index} className={styles.fieldsetTwo}>
                  <div className={styles.name}>
                    {person[0].toUpperCase() + person.substr(1)}:
                  </div>
                  {props.product.map((item, index) => {
                    return (
                      <div className={styles.product} key={index}>
                        <button
                          onClick={() => buttonProduct(person, item, item.id)}
                          className={changeStyle(person)}
                        >
                          {item.product}
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
