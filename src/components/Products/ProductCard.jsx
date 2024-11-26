import React from "react";

function ProductCard({ product }) {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <img
          className="w-full h-64 object-cover"
          src={product?.product_img}
          alt={product?.title}
        />
        {/* {product.discount && (
          <span className="absolute top-0 left-0 bg-red-600 text-white text-sm px-2 py-1">
            {product.discount}% OFF
          </span>
        )} */}
      </div>
      <div className="p-4">
        {/* Product Title */}
        <h5 className="text-lg font-semibold text-gray-800">
          {product?.title}
        </h5>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-3">
          {product?.description}
        </p>
<p className="text-black text-xl">{product?.stock_quantity}</p>
        {/* Stock Status */}
        <p className={`text-sm mb-2 ${product?.stock_quantity ? "text-green-600" : "text-red-600"}`}>
         {product?.stock_quantity ? "In Stock" : "Out of Stock"}
        </p>

        {/* Price Section */}
        <div className="flex items-center">
          <p className="text-xl font-bold text-gray-800">₹{product?.price}</p>
          {product?.originalPrice && (
            <p className="text-sm text-gray-500 line-through ml-2">
              ₹{product?.originalPrice}
            </p>
          )}
        </div>

        {/* Product Type */}
        <p className="text-sm text-gray-600 mt-2 font-bold">Type: {product?.name}</p>
      </div>
      {/* <div className="px-4 pb-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div> */}
    </div>
  );
}

export default ProductCard;
