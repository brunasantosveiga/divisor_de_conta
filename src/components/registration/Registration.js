import { useEffect, useState } from "react";
import { Consummation } from "../consummation/Consummation.js";
import styles from "./styles.module.css";

export const Registration = () => {
  const [lastName, setLastName] = useState("");
  const [names, setNames] = useState([]);
  const [lastProduct, setLastProduct] = useState({
    id: 0,
    product: "",
    value: 0,
    number: 0,
    people: [],
  });
  const [product, setProduct] = useState([]);
  const [next, setNext] = useState(false);
  const [checkFields, setCheckFields] = useState(false);

  useEffect(() => {
    console.log(names);
    console.log(product);
  }, [names, product]);

  const insertName = (event) => {
    setLastName(event.target.value);
  };
  const addClient = () => {
    if (lastName !== "") {
      setNames(() => [...names, lastName]);
    }
  };

  const insertProduct = (event) => {
    setLastProduct({ ...lastProduct, product: event.target.value });
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
      lastProduct.product !== "" &&
      lastProduct.value > 0 &&
      lastProduct.number > 0
    ) {
      const id = product.length + 1;
      lastProduct.id = id;
      setProduct(() => [...product, lastProduct]);
    }
  };

  const clickedNext = () => {
    // if (names.length > 0 && product.length > 0) {
    //   setNext(true);
    // } else {
    //   setCheckFields(true);
    // }
    setNext(true);
  };

  return (
    <div>
      {!next && (
        <div>
          <fieldset className={styles.fieldsetOne}>
            <legend>Insira os nomes dos clientes:</legend>
            <p>(Digite um nome por vez e clique no botão adicionar cliente)</p>
            Nome:
            <input type="text" value={lastName} onChange={insertName}></input>
            <button onClick={addClient}>Adicionar cliente</button>
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
              value={lastProduct.product}
              onChange={insertProduct}
            ></input>
            Valor: (Ex: 59,90)
            <input
              type="number"
              value={lastProduct.value}
              onChange={insertProductValue}
            ></input>
            Quantidade: (Ex: 2)
            <input
              type="number"
              value={lastProduct.number}
              onChange={insertProductNumber}
            ></input>
            <button onClick={addProduct}>Adicionar produto</button>
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
      <Consummation
        names={names}
        product={product}
        next={next}
        setProduct={setProduct}
      />
    </div>
  );
};
