import React from "react";
import Product from "./Product";
import "./ProductsList.css";

const ProductsList = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  return (
    <ul className="items">
      {DUMMY_MEALS.map((item) => (
        <Product
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
