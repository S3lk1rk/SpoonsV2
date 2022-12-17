import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledLayout from "./components/StyledLayout";
import Home from "./components/Home";
import Locations from "./components/Locations";
//import RecipeSearch from "./components/RecipeSearch"
import CategoryFilter from "./components/CategoryFilter"
import List from "./components/List";
import Item from "./components/Item";
import NoPage from "./components/NoPage";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { people, restaurants } from "./data/data";
//import Items from "./components/Orderlist";
import MenuFilter from "./components/MenuDisplay"
import ShoppingFilter from "./components/ShoppingListDisplay"

export default function App() {

  const [foods, setFoods] = useState([{

    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    ingredients: "",
    allergens: [],
    available: "",
    review: [],
    menu: [],
    shopping: []
  }]);

  const touchData = useCallback(() => {

    fetch(/recipe)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    touchData();
  }, [touchData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs people={people} />}>
          </Route>
          <Route path="recipes" element={<CategoryFilter details={foods} type={"recipe"} />} >
            <Route path=":itemId" element={<Item items={foods} />} />
          </Route>
          <Route path="/menus" element={<MenuFilter details={foods} />}>
          </Route>
          <Route path="/shopping" element={<ShoppingFilter details={foods} />}>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
