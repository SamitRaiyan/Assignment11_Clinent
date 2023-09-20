import React from 'react';
import { Link } from 'react-router-dom';
import img from "/public/banner.gif"
import img2 from "/public/banner2.gif"
import img3 from "/public/banner3.gif"
const Banner = () => {
    return (
        <div className='mx-2 flex flex-col gap-5 my-5 md:mx-20'>
            <img src={img} className='' alt="" />
            <img src={img2} className='' alt="" />
            <img src={img3} className='' alt="" />
            
        </div>
    );
};

export default Banner;