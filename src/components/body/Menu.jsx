import React, { Component } from "react";
import DISHES from "../../data/dishes.js";
import MenuItem from "./MenuItem";

export class Menu extends Component {
  state = {
    dishes: DISHES,
  };

  render() {
    const menu = this.state.dishes.map((dish) => {
      return <div><MenuItem dish={dish} key={dish.id}/></div>;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{menu}</div>
          <div className="col-6">
            <h1>Col 6</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
