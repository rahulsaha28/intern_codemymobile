import React from 'react'
import { CardType } from '../../App';

interface NewCardType extends CardType{
    handelDecrement:(id:number)=>void,
    handelIncrement:(id:number)=>void,
    
}

export const CardList = (props:NewCardType) => {
    const { id, picture, title, count, price, handelIncrement, handelDecrement } = props;

    return (
        <div className="col-md-6 col-sm-12 border mb-2">
            <div className="d-flex align-items-center justify-content-between">
                <img style={{width:"168px"}} src={picture} alt="" />
                <h6>{title}</h6>
                <div>
                    <button className="btn btn-success" onClick={()=>{
                        if(count>1){
                            handelDecrement(id)
                        }
                    }}>-</button>
                    <span className="ps-2 pe-2">{count}</span>
                    <button className="btn btn-success" onClick={()=>handelIncrement(id)}>+</button>
                </div>
                <h6 className="me-3">
                    {
                        price*count
                    }
                </h6>
            </div>
        </div>
    )
}
