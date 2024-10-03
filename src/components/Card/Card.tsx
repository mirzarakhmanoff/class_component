import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

interface ProductCardProps {
  data: Product;
}

export default class Card extends Component<ProductCardProps> {
  render() {
    const { data } = this.props;
    const { images, title, description, price } = data;

    return (
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <Link to={`/product/${data.id}`}>
          <img
            className="w-full h-48 object-contain"
            src={data.images[0]}
            alt={data.title}
          />
        </Link>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>{" "}
          <p className="text-sm text-gray-600 my-2">{description}</p>{" "}
          <div className="flex items-center justify-between mt-3">
            <span className="text-xl font-bold text-blue-600">${price}</span>{" "}
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
