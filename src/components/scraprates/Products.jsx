import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Header/Navigation";
import Loader from "../Loader";
import Error from "../Error";
import { FiEdit3 } from "react-icons/fi";
import {
  fetchScrap,
  updateItemRate,
} from "../../redux/features/scrapRateSlice";

function Products() {
  const dispatch = useDispatch();
  const {
    loading,
    data: scrapData,
    error,
  } = useSelector((state) => state.scrapDetails);

  const scrapRateData = scrapData?.data;
  const [editedPrices, setEditedPrices] = useState({});
  const [isEditing, setIsEditing] = useState(null);

  const handleEditClick = (itemId) => {
    setIsEditing(itemId);
    setEditedPrices((prevPrices) => ({
      ...prevPrices,
      [itemId]: scrapData?.data.find((item) => item.id === itemId)?.rate || "",
    }));
  };

  const handleInputChange = (e, itemId) => {
    const { value } = e.target;
    setEditedPrices((prevPrices) => ({
      ...prevPrices,
      [itemId]: value,
    }));
  };

  const handleSaveClick = (itemId) => {
    const editedPrice = editedPrices[itemId];
    dispatch(
      updateItemRate({ id: itemId, formData: { rate: editedPrice } })
    ).then((response) => {
      const updateResponse = response;
      dispatch(fetchScrap());
      return updateResponse;
    });
    // Add your logic to save the edited price for the specific item
    setIsEditing(null);
  };
  useEffect(() => {
    dispatch(fetchScrap());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="w-full text-center">
      <div className="w-11/12 mx-auto pt-28 px-4">
        <h1 className="text-center text-5xl font-bold text-black">
          Scrap Rates
        </h1>
        <div className="pt-20 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 justify-items-center">
          {scrapRateData?.map((item, index) => {
            // Destructure item properties
            const { id, item_name, image_url, rate } = item;

            // Determine if the current item is being edited
            const isItemEditing = isEditing === id;

            // Get the edited price for the current item
            const editedPrice = editedPrices[id];

            return (
              <div
                key={index}
                className=" w-72 sm:w-64 md:w-80 lg:w-72 justify-center p-4 my-4 bg-white rounded-md border-2 shadow-xl bg-center"
              >
                <div className="flex justify-center align-middle">
                  <img src={image_url} className="h-48 w-76" alt={item_name} />
                </div>
                <div className="name text-center text-black">
                  <h3 className="font-bold text-xl mt-2 ">{item_name}</h3>
                  {isItemEditing ? (
                    <div>
                      <input
                        type="text"
                        className="w-20 p-2 border-2 border-black-300 mr-2 bg-white text-black"
                        value={editedPrice}
                        onChange={(e) => handleInputChange(e, id)}
                      />
                      <button
                        className="bg-green-500 text-white text-center px-3 py-1"
                        onClick={() => handleSaveClick(id)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p
                      className="mt-2 flex justify-center cursor-pointer"
                      onClick={() => handleEditClick(id)}
                    >
                      Price: {rate}
                      <FiEdit3 className="w-5 font-bold h-5" />
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
