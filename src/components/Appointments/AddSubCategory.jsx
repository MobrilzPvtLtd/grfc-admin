import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function AddSubCategory({ setShowPopup }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  let url = import.meta.env.VITE_BACKEND_BASE_URL;
  useEffect(() => {
    const handleCategories = async () => {
      const response = await axios.get(`${url}/category`);
      setCategoryData(response.data.data);
    };
    handleCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("AuthToken");
    if (!token) {
      alert("Authentication token is missing. Please log in again.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter a valid sub-category name.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim()); 
    formData.append("category_id", selectedValue);
    if (image) {
      formData.append("image", image); 
    }

    try {
      setLoading(true); 
      const response = await axios.post(
        `${url}/subcategory`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }, 
        }
      );

      // Handle the response
      if (response.status === 200 || response.status === 201) {
        console.log("Sub-category created successfully:", response.data);
        alert("Sub-category created successfully!");
        setName(""); // Reset name
        setImage(null); // Reset image
        if (setShowPopup) setShowPopup(false); // Close popup if function exists
      } else {
        alert("An error occurred while creating the sub-category.");
      }
    } catch (error) {
      console.error(
        "Error creating sub-category:",
        error.response || error.message
      );
      alert(
        `An error occurred: ${
          error.response?.data?.message || "Please try again later."
        }`
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleGetId = (id) => {
    console.log("Selected ID:", id);
  };

  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedValue(selectedId);
    handleGetId(selectedId); // Pass the selected ID to your handler
  };
  console.log("category ki id", selectedValue);
  return (
    <div className="fixed z-50 inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
      <div className="absolute inset-0"></div>
      <div className="bg-white relative h-auto p-10 w-1/2 m-48 shadow-lg rounded-lg">
        <MdOutlineCancel
          className="absolute top-0 right-0 cursor-pointer"
          style={{ color: "black" }}
          size={32}
          onClick={() => (setShowPopup ? setShowPopup(false) : null)}
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Add Sub-Category</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            {/* Subcategory Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sub-Category Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow bg-white border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter sub-category name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Name:
              </label>

              <select
                className="bg-white"
                value={selectedValue}
                onChange={handleChange}
              >
                <option value="" >
                  Select a category
                </option>

                {categoryData?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Upload Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Sub-Category"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubCategory;
