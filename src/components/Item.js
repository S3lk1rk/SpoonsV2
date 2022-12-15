import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";
const Item = ({ food }) => {
  return (
    <div>

      <Accordion.Header> {food.name}</Accordion.Header>

      <Accordion.Body>
      <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.price}</p>
        <p>{food.allergens}</p>

        <p><FetchNutrition query={food.name} /></p>
        <p><Review food={food}/></p>
        <p>{food.review}</p>

      </Accordion.Body>

</div>
); };
export default Item;

