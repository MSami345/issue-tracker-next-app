"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button className="p-2 bg-white text-black rounded-lg"
        onClick={() => {
          alert("Added to the cart");
        }}
      >
        AddToCart
      </button>
    </div>
  );
};

export default AddToCart;
