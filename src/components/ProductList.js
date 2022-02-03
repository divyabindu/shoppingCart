import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductsDetails } from '../action/productAction.js';

const ProductList = (props) => {
    const [selectedItem, setSelectedItem] = useState()
    const items = useSelector(store => store.homeReducer.product)
    const cartitems = useSelector(store => store.cartReducer.currentproducts)
    const dispatch = useDispatch()

    useEffect(() => {
        setSelectedItem(props.id ? props.id : props.selectedItem ? props.selectedItem : "")
        if (items === undefined) {
            dispatch(fetchProductsDetails())
        }
    }, [props.selectedItem, props.id])

    const addToCart = (prod) => {
        let item = cartitems.findIndex(x => x.id === prod.id);
        if (item === -1) {
            Object.assign(prod, { quantity: 1 });
            dispatch({ type: "CART_NEW_ITEMS", payload: prod })
        }
        else {
            dispatch({ type: "INCREMENT", payload: prod })
        }
    }

    return (
        <div className="row">
            {
                items && items.map((prod, i) => {
                    return (
                        selectedItem && selectedItem === prod.category ?
                                <div className="col-lg-3 col-md-6 col-12 items my-3 px-3" key={prod.id}>
                                    <div className="row">
                                        <div className="col-12">
                                            <b className="productName">{prod.name}</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-6 mt-2">
                                            <img src={prod.imageURL} className="w-100 img-fluid" alt={prod.sku} />
                                        </div>
                                        <div className="col-md-12 col-6 m-auto">
                                            <p className="product-disc product-desc">{prod.description}</p>
                                            <div className="d-flex">
                                                <p className="mb-0 d-md-flex align-items-center d-sm-none">MRP Rs.{prod.price}</p>
                                                <button type="button" className="btn btn-danger ml-auto w-md-50 d-md-block d-sm-none" onClick={() => addToCart(prod)}>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-sm-block d-none d-md-none">
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-danger ml-auto w-100">Buy Now @ Rs.87</button>
                                        </div>
                                    </div>
                                </div>
                            :
                            selectedItem === "" ?
                                    <div className="col-md-3 col-12 items my-3" key={prod.id}>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="product-name">{prod.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-6 my-2">
                                                <img src={prod.imageURL ? prod.imageURL : ""} className="w-100 img-fluid" alt={prod.sku} />
                                            </div>
                                            <div className="col-md-12 col-6 m-auto">
                                                <p className="product-disc product-desc">{prod.description}</p>
                                                <div className="d-flex">
                                                    <p className="mb-0 d-md-flex align-items-center d-sm-none">MRP Rs.{prod.price}</p>
                                                    <button type="button" className="btn btn-danger ml-auto w-md-50 d-md-block d-sm-none" onClick={() => addToCart(prod)}>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-sm-block d-none d-md-none my-3">
                                            <div className="col-md-12">
                                                <button type="button" className="btn btn-danger ml-auto w-100">Buy Now @ Rs.87</button>
                                            </div>
                                        </div>
                                    </div>
                                :
                                <></>
                    )
                })
            }

        </div>
    )
}
export default ProductList;
