import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import Spinner from "../Spinner/Spinner";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  // all states
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart, clearCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  // use navigate path
  const navigate = useNavigate();
  // page count
  useEffect(() => {
    const url = "http://localhost:5000/productCount";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  /////////////////////////////////
  //useProduct data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [page, size]);
  // use Effect data search
  // useEffect(() => {
  //   fetch("http://localhost:5000/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const match = data.filter((d) =>
  //         d.name.toLowerCase().includes(searchText)
  //       );
  //       setSearch(match);
  //     });
  // }, [searchText]);

  // add to cart btn handler function
  const handleAddToCartBtn = (selectProduct) => {
    const allReadyExists = cart.find(
      (product) => product._id === selectProduct._id
    );
    let newCart = [];
    if (!allReadyExists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectProduct._id);
      allReadyExists.quantity = allReadyExists.quantity + 1;
      newCart = [...rest, allReadyExists];
    }
    setCart(newCart);
    addToDb(selectProduct._id);
  };
  // search result get function
  const handleSearchResult = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="search-field my-8 text-center ">
        {/* <input
          type="text"
          placeholder="Search..."
          className="text-start border-2 border-blue-900 py-2 px-4 rounded w-1/3 "
          onChange={handleSearchResult}
        /> */}
      </div>
      <div className="shop-container ">
        {loading ? (
          <Spinner />
        ) : (
          <div className="products-items mt-12 ml-12 md:m-6 ">
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {products.map((product) => (
                <Product
                  product={product}
                  handleBtn={handleAddToCartBtn}
                  key={product._id}
                />
              ))}
            </div>
            <div
              className="pagination flex
             justify-center items-center my-6"
            >
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  onClick={() => setPage(number + 1)}
                  className={`py-1 px-2 mr-1 border border-orange-500 rounded
                  ${
                    page === number + 1
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-500"
                  }
                  `}
                >
                  {number + 1}
                </button>
              ))}
              <select
                className="py-2 px-2 border "
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="5">5</option>
                <option selected value="10">
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        )}

        <div className="product-cart">
          <Cart cart={cart} clearCart={clearCart}>
            {cart.length > 0 && (
              <button
                onClick={() => navigate("/order")}
                className="bg-orange-500 p-2 flex w-full my-2 justify-between items-center rounded text-white"
              >
                Review Order
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </button>
            )}
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
