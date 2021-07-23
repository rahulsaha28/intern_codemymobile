import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../App'

export const CustomCard = (props:ProductType) => {
    const {id, title, description, picture } =  props;
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 mb-3">
            <div className="card">
                <img src={picture} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-primary" to={`/product/${id}`}>Product Detail</Link>
                </div>
            </div>
        </div>
    )
}
