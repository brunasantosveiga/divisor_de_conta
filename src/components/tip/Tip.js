import React, { useContext } from "react";
import { useState } from "react";
import { findDOMNode } from "react-dom";
import { AppContext } from "../../contexts/appContext.js";
import styles from "./styles.module.css";

export const Tip = (props) => {
  const { people, products, personAndConsumption, changeTip } =
    useContext(AppContext);

  const [click, setClick] = useState(false);
  const [result, setResult] = useState(false);

  const buttonService = (person, isTip) => {
    changeTip(person, isTip);
    setClick(!click);
  };

  const calculate = () => {
    setResult(true);
  };

  const value = (person) => {
    if (person.tip) {
      return (person.consumption * 1.1).toFixed(2);
    } else {
      return person.consumption.toFixed(2);
    }
  };
  console.log(personAndConsumption);

  return (
    <div>
      {props.next === 3 && (
        <div>
          <fieldset>
            <legend>Deseja pagar 10% de taxa de serviço?</legend>
            <div>
              {personAndConsumption.map((person, index) => {
                return (
                  <div key={index} className={styles.container}>
                    <div className={styles.name}>
                      {person.name[0].toUpperCase() + person.name.substr(1)}:
                    </div>
                    <button
                      onClick={() => buttonService(person, true)}
                      className={person.tip ? styles.active : styles.notActive}
                    >
                      SIM
                    </button>
                    <button
                      onClick={() => buttonService(person, false)}
                      className={person.tip ? styles.notActive : styles.active}
                    >
                      NÃO
                    </button>
                  </div>
                );
              })}
            </div>
          </fieldset>
          <div className={styles.divButton}>
            <button onClick={calculate}>Calcular</button>
          </div>
        </div>
      )}
      {result && (
        <fieldset>
          <legend>Valor pago por pessoa:</legend>
          {personAndConsumption.map((person, index) => {
            return (
              <div key={index} className={styles.divResult}>
                <div className={styles.name}>
                  {person.name[0].toUpperCase() + person.name.substr(1)}:
                </div>
                <div>R${value(person)}</div>
              </div>
            );
          })}
        </fieldset>
      )}
    </div>
  );
};
