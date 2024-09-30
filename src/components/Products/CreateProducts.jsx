import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function CreateProducts({ setShowPopup }) {
  const [formData, setFormData] = useState({
    title: "",
    product_type: "",
    description: "",
    price: "",
    stock_quantity: "",
    product_img: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, product_img: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form (optional)
    setFormData({
      title: "",
      product_type: "",
      description: "",
      price: "",
      stock_quantity: "",
      product_img: [],
    });
    // Close the popup after form submission
    setShowPopup(false);
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto bg-gray-300 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl relative">
        <MdOutlineCancel
          className="absolute top-0 right-0 cursor-pointer"
          size={32}
          onClick={() => setShowPopup(false)}
        />

        <h2 className="text-2xl font-bold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Product Title */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product title"
              required
            />
          </div>

          {/* Product Type Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Type
            </label>
            <select
              name="product_type"
              value={formData.product_type}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a product type</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Stock Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Stock Quantity
            </label>
            <input
              type="text"
              name="stock_quantity"
              value={formData.stock_quantity}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter stock quantity"
              required
            />
          </div>

          {/* Product Images */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product Images
            </label>
            <input
              type="file"
              name="product_img"
              multiple
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <p className="text-xs text-gray-600 mt-2">
              You can upload multiple product images.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProducts;
