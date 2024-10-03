import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: null | string;
  offset: number;
}

export default class Products extends Component<{}, ProductsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      offset: 9,
    };
  }

  componentDidMount(): void {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        this.setState({ data: res.data.products, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { data, loading, error, offset } = this.state;

    if (loading) {
      return <div className="text-center p-5">Loading...</div>;
    }

    if (error) {
      return <div className="text-center p-5">Error: {error}</div>;
    }

    return (
      <>
        <div className="flex flex-wrap gap-4">
          {data.slice(0, offset).map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <button
          onClick={() => this.setState({ offset: this.state.offset + 3 })}
          className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          See more
        </button>
      </>
    );
  }
}
