import { useEffect, useState } from "react";
import { fakeFetchQ2 } from "../api/fakeFetchQ2";

export default function Q22() {
  const [productsInfo, setProducts] = useState([]);

  const [dataToShow, setDatatoShow] = useState([]);
  const [filterApplied, setfilterApplied] = useState({
    quantityFilter: false,
    pricefilter: false
  });
  const getProducts = async () => {
    try {
      const {
        status,
        data: { products }
      } = await fakeFetchQ2("https://example.com/api/products");
      setProducts(products);
      setDatatoShow(products);
    } catch (e) {
      console.log(e);
    }
  };

  function filterhandler(type) {
    const quantityFilter =
      type === "quantityFilter"
        ? !filterApplied.quantityFilter
        : filterApplied.quantityFilter;
    const pricefilter =
      type === "pricefilter"
        ? !filterApplied.pricefilter
        : filterApplied.pricefilter;
    console.log(quantityFilter, "quqntyfilter");
    console.log(pricefilter, "pricefilter");
    let outputArray = productsInfo
      .filter(({ quantity }) => quantity > 20 || !quantityFilter)
      .filter(({ price }) => price > 20 || !pricefilter);
    outputArray = outputArray.length === 0 ? [...productsInfo] : outputArray;
    setDatatoShow(outputArray);

    // setDatatoShow(productsInfo.filter(({ quantity }) => quantity > 20));

    // setProducts()
    setfilterApplied({ ...filterApplied, [type]: !filterApplied[type] });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <button onClick={() => filterhandler("quantityFilter")}>
        Show Products With Quantity more than 20
      </button>
      <button onClick={() => filterhandler("pricefilter")}>
        Filter By Price
      </button>
      <ul>
        {dataToShow.map(({ name, price, quantity }) => (
          <li>
            {name}-Rs{price}-Quantity:{quantity};
          </li>
        ))}
      </ul>
    </>
  );
}
// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
