import React from "react";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import MyToys from "./MyToys";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";




const Toycard = (props) => {
  const {toy_name,_id, rating,price, addedBy,quantity, description, email,image, materials, category,} = props.toy;
  const handleDelete=props.delete






  return (
    <div>
      <div className="my-5 py-4  grid grid-cols-5">
        <div className="flex items-center pl-5">
          <img src={image} className="w-20 h-20 rounded-lg" />
          <div className="px-2">
            <h1 className="text-xl font-semibold">{toy_name}</h1>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{category}</span>
           
          </div>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{price} $</h1>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{quantity}</h1>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{addedBy}</h1>
        </div>
        <div className="mx-auto">
            <Link to={`/update/${_id}`}>
        <button  className="btn bg-warning mx-3">
            <RiEdit2Fill size={20} /></button></Link>
         
          <button onClick={()=>handleDelete(_id)} className="btn bg-warning mx-3">
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Toycard;
