import React from "react";
import { useParams } from 'react-router-dom';

import { MainLayout } from 'shared';

const Product = () => {
    const params = useParams()
    console.log(params)
    return <MainLayout>Product</MainLayout>
}

export default Product