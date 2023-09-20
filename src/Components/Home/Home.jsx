import React, { useContext } from 'react';
import Banner from './Banner';

import CatagoryContainer from './CatagoryTabs/CatagoryContainer';
import { Circles } from 'react-loader-spinner'
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const Home = () => {
    useTitle("Home")
    const { loading } = useContext(AuthContext);
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
        <div>
            <Banner/>
                   
           <CatagoryContainer/>
           
        </div>
    );
};

export default Home;