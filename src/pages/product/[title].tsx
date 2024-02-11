import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Fragment, useState} from "react";
import Header from "@/components/Header/Header";
import classes from "./Product.module.css";


export default function Product(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState<any | null>(null);

    return (
        <Fragment>
            <Header/>
            <section className="product pt-5">
                <div className="main">
                    <div className="container">
                        <div className="row product-flex flex">

                            <div className="col-lg-4 product-flex-info">

                                <header>
                                    <div className="container">
                                        <h2 className="title">Mellany Sofa</h2>
                                        <div className="text">
                                            <p>Nam egestas tincidunt turpis</p>
                                        </div>
                                    </div>
                                </header>
                                <div className="clearfix">

                                    <div className="clearfix">

                                        <div className="price">
                                        <span className="h3">
                                            $ 1999,00
                                            <small>$ 2999,00</small>
                                        </span>
                                        </div>

                                        <hr/>

                                        <div className="info-box">
                                            <span><strong>Maifacturer</strong></span>
                                            <span>Brand name</span>
                                        </div>

                                        <div className="info-box">
                                            <span><strong>Materials</strong></span>
                                            <span>Wood, Leather, Acrylic</span>
                                        </div>

                                        <hr/>

                                        <div className="info-box">
                                            <span><strong>Available Colors</strong></span>
                                            <div className="product-colors clearfix">
                                                <span className="color-btn color-btn-red"></span>
                                                <span className="color-btn color-btn-blue checked"></span>
                                                <span className="color-btn color-btn-green"></span>
                                                <span className="color-btn color-btn-gray"></span>
                                                <span className="color-btn color-btn-biege"></span>
                                            </div>
                                        </div>

                                        <hr/>

                                        <div className="info-box">
                                            <span><strong>Choose size</strong></span>
                                            <div className="product-colors clearfix">
                                            <span className="color-btn color-btn-biege">
                                                <span className="product-size">S</span>
                                            </span>
                                                <span className="color-btn color-btn-biege checked">M</span>
                                                <span className="color-btn color-btn-biege">XL</span>
                                                <span className="color-btn color-btn-biege">XXL</span>
                                            </div>
                                        </div>

                                        <hr/>

                                        <div className="info-box">
                                        <span>
                                            Quantity
                                        </span>
                                            <span>
                                            <span className="row">
                                                <span className="col-6">
                                                    <input type="number"  className="form-control"/>
                                                </span>
                                                <span className="col-6">
                                                    <Link href="#" className="btn btn-danger">Buy now</Link>
                                                </span>
                                            </span>
                                        </span>
                                        </div>

                                        <hr/>

                                        <div className="info-box">
                                        <span>
                                            <small>*** We progress your order for shipping as soon as possible. Please note that after your order has been received, we can not change the delivery address. Control your address details in any case before placing your order!</small>
                                        </span>
                                        </div>

                                        <hr/>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-8">

                                <>
                                    <Swiper navigation={true} modules={[Navigation]} className={classes.swiperContainer}>
                                        <SwiperSlide className={classes.swiperSlide}>
                                            <img src="/static/images/product-1.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-2.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-3.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-4.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-5.jpg" className={classes.imageSlide} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-6.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-7.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-8.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-9.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/static/images/product-10.jpg" className={classes.imageSlide}/>
                                        </SwiperSlide>
                                    </Swiper>
                                </>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}