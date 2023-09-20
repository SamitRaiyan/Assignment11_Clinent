import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gif from "./../../../public/404.gif"
const Error = () => {
    document.title="Error: page not available"
    return (
        <div>
            <img className='w-full '  src={gif} alt="" />
            
                <Link to={'/'} className='flex justify-around'>
                <button className='btn btn-primary'>Let's Go back to Home</button></Link>
            
        </div>
    );
};

export default Error;