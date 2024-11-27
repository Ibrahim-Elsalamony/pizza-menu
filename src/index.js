import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 1;

  const isOpen =
    (hour >= openHour && hour < 24) || (hour >= 0 && hour < closeHour);

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer closeHour={closeHour} openHour={openHour} isOpen={isOpen} />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "34px",
  //   textTransform: "uppercase",
  // };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast react Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((element, index) => (
              <Pizza
                element={element}
                key={index} // Add a unique key for each element
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We'r still working on our Menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ element }) {
  // [name, ingredients, price, photoName, soldOut] = props.element;
  // if (element.soldOut === true) {
  //   return null;
  // }
  return (
    <li className={`pizza ${element.soldOut ? "sold-out" : ""}`}>
      <img src={element.photoName} alt={element.name} />
      <h3>{element.name}</h3>
      <p>{element.ingredients}</p>
      {element.soldOut ? <span>SOLD OUT</span> : <span>{element.price}$</span>}
      {/* <span>{element.soldOut ? "SOLD OUT" : element.price}</span> */}
    </li>
  );
}

function Footer(props) {
  // return React.createElement("footer", null, "We currently open");
  return (
    <footer className="footer">
      {props.isOpen ? (
        <div className="order">
          <p>
            We open until {props.closeHour}:00. Come visit us or oder Online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We'r happy to Welcome you between {props.openHour}:00 and{" "}
          {props.closeHour}:00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Purpose of StrictMode:
// 1- During development, it renders components twice to help identify bugs.
// 2- It checks if outdated parts of the React API are being used.
// 3- It does not affect the production build—only the development process.

//React Fragment <></> or <React.Fragment></React.Fragment>
