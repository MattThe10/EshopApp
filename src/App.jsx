import "./App.css";
import { products } from "./products.js";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import cartImage from "./assets/cart.png";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  function toggleCart() {
    setCartVisible((visible) => !visible);
  }

  function addItem(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
      <Header className="relative">
        {/* The cart icon with some functionality */}
        <button
          type="button"
          className="cursor-pointer h-[1.5rem]"
          onClick={toggleCart}
        >
          <img
            src={cartImage}
            alt="Cart"
            className=" relative top-2 right-2 h-[1.5rem]"
          />
          <p className="inline-block p-[0.8px] relative bottom-7 bg-red-600 rounded text-white text-xs">
            {cart.length}
          </p>
        </button>
        {/* Displaying products added to the cart */}
        <table
          className={`flex absolute top-8 bg-white border-1 border-black rounded text-[0.8em] ${
            cartVisible ? " inline" : " hidden"
          }`}
        >
          {cart.length === 0 ? (
            <p className="inline bg-white ">Cart is empty</p>
          ) : (
            cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.priceDollar}$</td>
                </tr>
              );
            })
          )}
          <tr>
            <td>
              <button
                type="submit"
                className="cursor-pointer justify-self-center"
              >
                Checkout
              </button>
            </td>
            <td>
              <p className="underline font-bold">
                {cart.reduce((acc, product) => {
                  return acc + product.priceDollar;
                }, 0)}
                $
              </p>
            </td>
          </tr>
        </table>
      </Header>
      <main className="flex flex-row flex-wrap w-[72vw] m-auto bg-white">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              imageSource={product.imageSource}
              priceDollar={product.priceDollar}
              func={() => addItem(product)}
            ></Product>
          );
        })}
      </main>
    </>
  );
}

export default App;
