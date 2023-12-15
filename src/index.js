import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 120,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 420,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 175,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 200,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 250,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 380,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const headerStyle = { color: "blue", fontSize: "48px", textTransform: "uppercase"}
  const headerStyle = {};
  return (
    <header className="header">
      <h1 style={headerStyle}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>
      Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone even, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            // name={pizza.name}
            pizzaObj={pizza}
            key={pizza.name}
          />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza( {pizzaObj} ) {

// if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : <span> ₹ {pizzaObj.price} </span> }</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
       <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}. We are currently open */}
    </footer>
  );
}

function Order( {closeHour, openHour} ) {
  return (
    <div className="order">
    <p>we are open from  {openHour}:00 to {closeHour}:00, Come visit or order online.</p>
    <button className="btn">Order Now</button>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
