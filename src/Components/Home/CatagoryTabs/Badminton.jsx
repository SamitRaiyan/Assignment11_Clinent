import React, { useContext } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const StarWar = (props) => {
  const navigate = useNavigate();
  const { toy_name, price, image, rating, _id } = props.star;
  const { user } = useContext(AuthContext);

  const handleNavigate = () => {
    navigate(`/toydetail/${_id}`);
  };
  return (
    <div data-aos="zoom-in">
    <div>
      <div>
        <div className="card w-80 bg-base-100 shadow-2xl">
          <figure>
            <img
              className="w-3/4 h-64 my-5 rounded-xl"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <div className="flex justify-between items-center">
              <h2 className="card-title">{toy_name}</h2>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar color="617A55" />}
                placeholderSymbol={<FaStar color="617A55" />}
                fullSymbol={<FaStarHalf color="617A55" />}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="badge badge-accent-focus p-3 text-center">
                $ {price}
              </div>

              <label
                onClick={handleNavigate}
                className="btn px-5 py-2 rounded-lg bg-yellow-600 text-white"
              >
                view details
              </label>
            </div>
          </div>
        </div>
      </div>
    
    </div></div>
  );
};

export default StarWar;
