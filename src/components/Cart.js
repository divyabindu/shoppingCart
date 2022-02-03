import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FaPlusCircle, FaTimes, FaMinusCircle } from "react-icons/fa";

const Cart=(props)=> {
    const dispatch = useDispatch();
    const selectedData = useSelector(store => store.cartReducer.currentproducts)
    
    const decrement = (desc) => {
        if (desc.quantity > 1) {
            dispatch({ type: "DECREMENT", payload: desc })
        }
    }

    const increment = (inc) => {
        dispatch({ type: "INCREMENT", payload: inc })
    }


    const remove = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }

    return (
        <div className="container">
            {
                selectedData && selectedData.length > 0 ? selectedData.map((item) => {
                    return (
                        <div className="row cart-item-img mb-3" key={item.id}>
                            <span className="remove" onClick={() => remove(item.id)}><FaTimes /></span>
                            <div className="col-md-2 col-4 m-auto">
                                <img src={item.imageURL} className="img-fluid w-100" alt="items" />
                            </div>
                            <div className="col-md-10 col-8">
                                <p>{item.name}</p>
                                <p><span className="icons" onClick={() => decrement(item)}><FaMinusCircle /></span> {item.quantity} <span className="icons" onClick={() => increment(item)}><FaPlusCircle /></span>&nbsp; &nbsp; <span className="times"><FaTimes /> Rs.{item.price}</span> <span className="float-right">Rs.{item.quantity * item.price}</span></p>
                            </div>
                        </div>
                    )
                })
                    :
                    <div className="text-center m-auto">
                        <h5 className="font-weight-bold">No items in your cart</h5>
                        <p>Your favourite items are just a click away</p>
                    </div>
            }
            {
                selectedData != undefined && selectedData.length > 0 ?
                    <div className="row cart-item-img">
                        <div className="col-12">
                            <p className="text-center mb-0">You won't find it cheaper anywhere</p>
                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    )
}

export default Cart;
