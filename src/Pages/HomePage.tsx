import React, { useContext, useEffect } from 'react'
import { ContextForProduct, ContextType } from '../App'
import { CustomCard } from '../Components/CustomCard/CustomCard';
import productData from '../Data/ProductData.json';


export const HomePage = () => {
    const { products, setProducts } = useContext<ContextType>(ContextForProduct);

    useEffect(() => setProducts(productData), [])

    return (
        <div className="container mt-4">
            <div className="row">
                {
                    products.map(product => <CustomCard key={Math.random()} {...product} />)
                }
            </div>

        </div>
    )
}
