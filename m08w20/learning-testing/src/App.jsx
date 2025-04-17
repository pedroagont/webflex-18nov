import { useState } from "react";
import "./App.css";

import sortProductsByPrice from './helpers/sortProductsByPrice'

const initialProducts = [
  {
    id: 1,
    name: "iPad",
    price: 400,
  },
  {
    id: 2,
    name: "iPhone",
    price: 600,
  },
  {
    id: 3,
    name: "Apple Mouse",
    price: 100,
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 200,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts)

  const handleClickSortByPrice = () => {
    console.log('Hello from button!')

    setProducts(prev => sortProductsByPrice(prev))
  }


  return (
    <>
      <header>
        <h1>Hello from app! 👽</h1>
        <p>This lecture is awesome!</p>
      </header>
      <section>
        <h3>My amazing store!</h3>
        <button onClick={handleClickSortByPrice}>Sort by price</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <button>Buy!</button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
