import { Component } from "react";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 gap-5 items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <p className="text-3xl font-bold">Logo</p>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Главная
              </Link>
              <Link
                to="/shop"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Магазин
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                О нас
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Контакты
              </Link>
            </nav>

            <div className="flex-1 max-w-lg mx-auto hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Поиск товаров..."
                />
                <FiSearch
                  className="absolute top-2.5 right-4 text-gray-500"
                  size={20}
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative">
                <FiShoppingCart size={24} color="gray" />
                <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs px-1.5 py-0.5">
                  3
                </span>
              </Link>
              <Link to="/profile">
                <FiUser size={24} color="gray" />
              </Link>
            </div>
          </div>
        </div>

        <div className="block md:hidden px-4 py-2">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Поиск товаров..."
            />
            <FiSearch
              className="absolute top-2.5 right-4 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </header>
    );
  }
}
