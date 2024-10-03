import { Component } from "react";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}
