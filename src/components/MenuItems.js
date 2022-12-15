import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";

const MenuItems = ({ items }) => {
  return (
    <Accordion style={{width:50+'%'}}>
      {items.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <Item food={food} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default MenuItems;