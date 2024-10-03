import { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

interface ProductsState {
  data: Product | null;
  loading: boolean;
  error: null | string;
}

class SinglePage extends Component<any, ProductsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount(): void {
    const { id } = this.props.params;

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div className="text-center p-5">Loading...</div>;
    }

    if (error) {
      return <div className="text-center p-5">Error: {error}</div>;
    }

    if (!data) {
      return <div className="text-center p-5">Product not found.</div>;
    }

    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <header className="bg-blue-600 text-white p-5">
          <h1 className="text-3xl font-bold">Product Details</h1>
        </header>

        <main className="flex flex-col md:flex-row p-5 justify-center items-start gap-10">
          <div className="md:w-1/2">
            <img
              className="w-full h-96 object-contain rounded-lg shadow-lg"
              src={data.images}
              alt={data.title}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
            <p className="text-sm text-gray-600 my-2">{data.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-2xl font-bold text-blue-600">
                ${data.price}
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white text-center p-5 mt-5">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

const SinglePageWithParams = (props: any) => {
  const params = useParams();
  return <SinglePage {...props} params={params} />;
};

export default SinglePageWithParams;
