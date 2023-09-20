import React, { useContext, useEffect, useState } from "react";
import Toycard from "./Toycard";
import { FaSearch } from "react-icons/fa";
import { Circles } from 'react-loader-spinner'
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from "../../Hooks/useTitle";




const AllToy = () => {
  useTitle("All Toys")
    const { loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [data, setData] = useState(toys);
  useEffect(() => {
    fetch("https://toy-shop-server-gamma.vercel.app/alltoys")
      .then((res) => res.json())
      .then((info) => {
        setToys(info);
        setData(info);
      });
  }, []);
const [limit,setLimit]=useState(20)
const handleLimit=()=>{
    setLimit(toys.length)
}
const handlelowLimit=()=>{
    setLimit(20)
}
  const filter = (event) => {
    setData(
      toys.filter((toy) =>
        toy.toy_name.toLowerCase().includes(event.target.value)
      )
    );
  };

  if(loading){
    return <div className='flex justify-around'><Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /></div>
}


  return (
    <div className="mx-12 my-10">
      
      <div className=" grid grid-cols-5 text-2xl bg-yellow-200 py-4">
        <div className="text-center text-yellow-950">
          <h1>Toy</h1>
        </div>
        <div className="text-center text-yellow-950">
          <h1>Price</h1>
        </div>
        <div className="text-center text-yellow-950">
          <h1>Quantity</h1>
        </div>
        <div className="text-center text-yellow-950">
          <h1>Seller</h1>
        </div>
        <div className="text-center text-yellow-950">
          <h1>Details</h1>
        </div>
      </div>
      {data.slice(0,limit).map((toy) => (
        <Toycard key={toy._id} product={toy}  />
      ))}
      <div className="flex justify-around">
        {limit==20?<button className="btn bg-warning my-4 " onClick={handleLimit}>view all toys</button>:
        <button className="btn bg-warning my-4 " onClick={handlelowLimit}>view less</button>}
      </div>
      
    </div>
  );
};

export default AllToy;
