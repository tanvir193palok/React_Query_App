import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AddProduct = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    ratig: 5,
    thumbnail: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    
  }

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          placeholder="Enter a product name"
          className="my-2 border p-2 rounded"
        />
      </form>
    </div>
  );
};

export default AddProduct;
