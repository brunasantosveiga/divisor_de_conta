import React, { useEffect, useState, useContext } from "react";
import { Consummation } from "../consummation/Consummation.js";
import { Tip } from "../tip/Tip.js";
import styles from "./styles.module.css";
import { AppContext } from "../../contexts/appContext.js";

export const Registration = () => {
  const { savePeople, people, saveProduct, products } = useContext(AppContext);

  const [lastName, setLastName] = useState("");
  const [lastProduct, setLastProduct] = useState({
    name: "",
    value: 0,
    number: 0,
    people: [],
  });
  const [next, setNext] = useState(1);
  const [checkFields, setCheckFields] = useState(false);

  const insertName = (event) => {
    setLastName(event.target.value);
  };
  const addClient = () => {
    if (lastName !== "") {
      savePeople(lastName);
      setLastName("");
    }
  };

  const insertProduct = (event) => {
    setLastProduct({ ...lastProduct, name: event.target.value });
  };
  const insertProductValue = (event) => {
    if (event.target.value !== "") {
      setLastProduct({ ...lastProduct, value: parseFloat(event.target.value) });
    }
  };
  const insertProductNumber = (event) => {
    if (event.target.value !== "") {
      setLastProduct({
        ...lastProduct,
        number: parseFloat(event.target.value),
      });
    }
  };
  const addProduct = () => {
    if (
      lastProduct.name !== "" &&
      lastProduct.value > 0 &&
      lastProduct.number > 0
    ) {
      saveProduct(lastProduct);
      setLastProduct({
        name: "",
        value: 0,
        number: 0,
        people: [],
      });
    }
  };

  const clickedNext = () => {
    if (products.length > 0 && people.length > 0) {
      setNext(2);
    } else {
      setCheckFields(true);
    }
  };

  return (
    <div>
      {next === 1 && (
        <div>
          <fieldset className={styles.fieldsetOne}>
            <legend>Insira os nomes dos clientes:</legend>
            <p>(Digite um nome por vez e clique no botão adicionar cliente)</p>
            Nome:
            <input type="text" value={lastName} onChange={insertName}></input>
            <button onClick={addClient}>Adicionar cliente</button>
            {people.length !== 0 && (
              <div className={styles.addedCustomers}>
                <p>Clientes já adicionados:</p>
                {people.map((APeople, index) => {
                  return (
                    <div key={index}>
                      {APeople !== people[people.length - 1] && (
                        <p>{APeople[0].toUpperCase() + APeople.substr(1)},</p>
                      )}
                      {APeople == people[people.length - 1] && (
                        <p>{APeople[0].toUpperCase() + APeople.substr(1)}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </fieldset>
          <fieldset className={styles.fieldsetOne}>
            <legend>
              Insira os produtos consumidos com seus respectivos valores (em
              reais) e quantidades:
            </legend>
            <p>
              (Digite os dados de um produto por vez e clique no botão adicionar
              produto)
            </p>
            Produto:
            <input
              type="text"
              value={lastProduct.name}
              onChange={insertProduct}
            ></input>
            Valor: (Ex: 59,90)
            <input
              type="number"
              value={lastProduct.value === 0 ? "" : lastProduct.value}
              onChange={insertProductValue}
            ></input>
            Quantidade: (Ex: 2)
            <input
              type="number"
              value={lastProduct.number === 0 ? "" : lastProduct.number}
              onChange={insertProductNumber}
            ></input>
            <button onClick={addProduct}>Adicionar produto</button>
            {products.length !== 0 && (
              <div className={styles.addedProducts}>
                <p>Produtos já adicionados:</p>
                {products.map((AProduct, index) => {
                  return (
                    <div key={index}>
                      {AProduct !== products[products.length - 1] && (
                        <p>{AProduct.name},</p>
                      )}
                      {AProduct == products[products.length - 1] && (
                        <p>{AProduct.name}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </fieldset>
          <div className={styles.divButtonNext}>
            {checkFields === true && (
              <p className={styles.warning}>Preencha todos os campos</p>
            )}
            <button onClick={clickedNext} className={styles.buttonNext}>
              Próximo
            </button>
          </div>
        </div>
      )}
      <Consummation next={next} setNext={setNext} />
      <Tip next={next} setNext={setNext} />
    </div>
  );
};
//arrumar a opção de apagar os valores dos produtos
//colocar mãozinha na seleção dos produtos
