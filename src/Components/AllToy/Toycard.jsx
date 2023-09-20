import React, { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';





const Toycard = (props) => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const { price, addedBy, category, quantity, image, toy_name ,_id} = props.product;
 
    
    console.log(_id)
   
  
 
  return <div className="my-5 py-4 grid grid-cols-5">
    <div className="flex items-center pl-5">
        <img src={image} className="w-20 h-20 rounded-lg"/>
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
    <Link to={`/toydetail/${_id}`}><button className="btn bg-warning">view details</button></Link>
    </div>

</div>
 

    
  ;
};

export default Toycard;
