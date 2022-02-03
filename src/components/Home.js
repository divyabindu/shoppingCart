import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-slideshow-image/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { fetchBanners, fetchCategories } from '../action/homeAction';

const Home = (props) => {

    const banner = useSelector(store => store.homeReducer.bannerItems)
    const category = useSelector(store => store.homeReducer.catagories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBanners())
        dispatch(fetchCategories())
        window.scrollTo(0, 0)
    }, [])

    const selectedcategory = (data) => {
        props.history.push({
            pathname: '/products',
            state: { detail: data }
        })
    }

    return (
        <>
            <div className="slide-container">
                <Carousel autoPlay={true} interval="2000" showThumbs={false}>
                    {banner && banner.map((items, id) => {
                        return (
                            <div key={items.id}>
                                <img src={items.bannerImageUrl} alt={items.bannerImageAlt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className="container">
                {
                    category && category.map((catagories, i) => {
                        return (
                            <div className="row my-5 cata" key={catagories.id}>
                                <div className={`col-md-4 col-5 m-auto ${i % 2 === 0 ? "order-1" : "order-2"}`}>
                                    <img src={catagories.imageUrl} className="img-fluid d-flex m-auto justify-content-center" alt={catagories.name} />
                                </div>
                                <div className={`col-md-8 col-7 text-center product-desc-btn m-md-auto ${i % 2 === 0 ? "order-2" : "order-1"}`}>
                                    <p className="font-weight-bold">{catagories.name}</p>
                                    <p>{catagories.description}</p>
                                    <button className="btn btn-danger" onClick={() => selectedcategory(catagories)}>{`Explore ${catagories.name}`}</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home;
