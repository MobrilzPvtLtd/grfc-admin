import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CreateProductForm from "./CreateProducts";
import AddProductTypeForm from "./ProductType";
import { useDispatch, useSelector } from "react-redux";
import { fetchProcuct } from "../../redux/features/productsSlice";

// Sample data for products
// const productsData = [
//   {
//     id: 1,
//     image: "https://example.com/laptop1.jpg",
//     title: "ASUS Vivobook 15 Thin and Light Laptop",
//     shortDescription: "Intel i5, 8GB RAM, 512GB SSD",
//     price: 47990,
//     originalPrice: 76990,
//     discount: 38,
//     inStock: true,
//     type: "Electronics",
//   },
//   {
//     id: 2,
//     image: "https://example.com/laptop2.jpg",
//     title: "Dell Inspiron 15 Laptop",
//     shortDescription: "Intel i7, 16GB RAM, 1TB SSD",
//     price: 87990,
//     originalPrice: 99990,
//     discount: 12,
//     inStock: true,
//     type: "Electronics",
//   },
//   {
//     id: 3,
//     image: "https://example.com/laptop3.jpg",
//     title: "HP Pavilion Gaming Laptop",
//     shortDescription: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
//     price: 67990,
//     originalPrice: 84990,
//     discount: 20,
//     inStock: false,
//     type: "Electronics",
//   },
//   // Add more products as needed
// ];

function Products() {
  const dispatch = useDispatch();
  const { data: productsData, loading, error } = useSelector((state) => state.productDetails);

  // Separate state for controlling both popups
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [showProductTypePopup, setShowProductTypePopup] = useState(false);

  useEffect(() => {
    dispatch(fetchProcuct());
  }, [dispatch]);
  const openProductPopup = () => {
    setShowProductPopup(true);
  };

  const openProductTypePopup = () => {
    setShowProductTypePopup(true);
  };

  const closeProductPopup = () => {
    setShowProductPopup(false);
  };

  const closeProductTypePopup = () => {
    setShowProductTypePopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="flex justify-end gap-2 m-10 items-end">
        {/* Button to open "Add Product" popup */}
        <button
          onClick={openProductPopup}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>

        {/* Button to open "Add Product Type" popup */}
        <button
          onClick={openProductTypePopup}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product Type
        </button>
      </div>

      <h1 className="text-3xl text-gray-800 font-bold text-center mb-8">Products</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapping over products array and rendering ProductCard for each product */}
          {productsData?.data?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>

      {/* Conditionally render the CreateProductForm popup */}
      {showProductPopup && <CreateProductForm setShowPopup={setShowProductPopup} />}

      {/* Conditionally render the AddProductTypeForm popup */}
      {showProductTypePopup && <AddProductTypeForm setShowPopup={setShowProductTypePopup} />}
    </div>
  );
}

export default Products;
