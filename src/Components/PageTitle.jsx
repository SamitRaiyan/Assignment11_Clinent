import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const PageTitle = ({title}) => {
    return (
        <Helmet>
           <title>PlayTime-{title}</title>
        </Helmet>
    );
};

export default PageTitle;