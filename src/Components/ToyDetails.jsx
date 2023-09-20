import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from "../Hooks/useTitle";
const ToyDetails = () => {
  useTitle("Toy Details")
  const toys = useLoaderData();
  const {
    toy_name,
    rating,
    price,
    addedBy,
    description,
    email,
    image,
    materials,
    category,
  } = toys;
  console.log(toys);
  return (
    <div className="bg-yellow-50 px-20 pb-20">
      <div className="">
        <div className="flex flex-col gap-8  items-center py-8 px-8 my-8">
          <img src={image} className=" w-1/3" />
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-4xl text-yellow-800 font-bold ">{toy_name}</h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{category}</span>
            <Rating
              className="text-2xl"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar color="E57C23" />}
              placeholderSymbol={<FaStar color="E57C23" />}
              fullSymbol={<FaStarHalf color="E57C23" />}
            />
            <h2 className="text-lg font-bold">Price: $ {price}</h2>
          </div>
        </div>
      </div>

      
      <div className="mx-36  flex flex-col justify-start">
        <h1 className="text-2xl text-stone-800 py-3 my-2  bg-white px-10">Material: {materials}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2  bg-white px-10">Seller Name: {addedBy}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2  bg-white px-10">Seller Email: {email}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2  bg-white px-10">Description: {description}</h1>
      </div>
    </div>
  );
};

export default ToyDetails;
