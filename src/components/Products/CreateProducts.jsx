import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";

function CreateProducts({ setShowPopup }) {
  const [formData2, setFormData2] = useState({
    title: "",
    product_type: "",
    description: "",
    price: "",
    stock_quantity: ""
  });
  let url = import.meta.env.VITE_BACKEND_BASE_URL;
  const [producttype, setProducttype] = useState(null);
  const [fileInput , setFileInput] = useState(null);

  useEffect(()=>{
    const handleProductType = async()=>{
      const response = await axios.get(`${url}/producttype`);
      setProducttype(response.data.data)
        };
        handleProductType();
  },[setShowPopup])
  let token  = localStorage.getItem("AuthToken")
  const handleProductType = async()=>{
   // Create a FormData object
 

  // Assuming you have file input and text data
  // const fileInput = document.querySelector('input[type="file"]'); // Replace with your file input selector
  // const textField = 'Some text data'; // Example text data

  // // Append files to the FormData object
  // if (fileInput.files.length > 0) {
  //   for (let i = 0; i < fileInput.files.length; i++) {
  //     formData.append('files', fileInput.files[i]); // `files` matches the key on the backend
  //   }
  // }

  // // Append other data to the FormData object
  // formData.append('data', textField); // `data` matches the key on the backend

  
};

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const handleFileChange = (e) => {
    setFileInput(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // Append individual form data fields to `formData`
    formData.append('title', formData2.title);
    formData.append('product_type', formData2.product_type);
    formData.append('description', formData2.description);
    formData.append('price', formData2.price);
    formData.append('stock_quantity', formData2.stock_quantity);
  
    // Append files to `formData`
    if (fileInput.length > 0) {
      for (let i = 0; i < fileInput.length; i++) {
        formData.append('files', fileInput[i]); // Adjust 'files' key to match backend expectations
      }
    }
  
    // Serialize the remaining object (if required) and append it
    const formDataJson = JSON.stringify(formData2);
    // formData.append('data', formDataJson);
  
    console.log("FormData payload:");
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }
  
    try {
      // Send the `FormData` object using Axios
      const response = await axios.post(`${url}/order`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  
    // Reset the form (optional)
    setFormData2({
      title: "",
      product_type: "",
      description: "",
      price: "",
      stock_quantity: "",
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
              value={formData2.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter product title"
              required
            />
          </div>

          {/* Product Type Dropdown */}
          <div className="mb-4">
            <label className="block  text-gray-700 text-sm font-bold mb-2">
              Product Type
            </label>
            <select
              name="product_type"
              value={formData2.product_type}
              onChange={handleInputChange}
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a product type</option>
              {producttype?.map((item , index)=>(
 <option value={item.id} key={index}>{item.name}</option>
              ))}
             
            
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData2.description}
              onChange={handleInputChange}
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              value={formData2.price}
              onChange={handleInputChange}
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              value={formData2.stock_quantity}
              onChange={handleInputChange}
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
