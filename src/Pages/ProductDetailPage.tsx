import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextForProduct, ProductType } from '../App';
import productData from '../Data/ProductData.json';

export const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [productDetail, setProductDetail] = useState<ProductType>({
        id: parseInt(id),
        title: '',
        description: '',
        price: 0,
        picture: ''
    });

    useEffect(() => {
        const data: ProductType = productData.filter(product => product.id === parseInt(id))[0];
        setProductDetail(data);
    }, [id])

    const { setCards, cards } = useContext(ContextForProduct);

    const handelAddCard = ():void=>{
        setCards([...cards, {...productDetail, count:1}]);
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-evenly align-items-center p-5 border">
                <img src={productDetail.picture} alt="" />
                <div className="ms-4">
                    <h5>Title: {productDetail.title}</h5>
                    <p>{productDetail.description}</p>
                    <p>Price: {productDetail.price} TK</p>
                    <button className="btn btn-primary" onClick={handelAddCard}>Add To Card</button>
                </div>
            </div>
        </div>

    )
}
