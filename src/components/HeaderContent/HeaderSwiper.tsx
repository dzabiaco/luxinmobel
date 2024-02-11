import {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay , Navigation, Thumbs} from 'swiper/modules';
import classes from "./HeaderContent.module.css";
import Link from "next/link";

export default function HeaderSwiper(){

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState<any | null>(null);

    const params = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000, // Set autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay even when user interacts with Swiper
        }
    }

    return (
        <>
            <Swiper navigation={true} modules={[Navigation,Autoplay]} {...params}>

                <SwiperSlide>
                    {/*<img src="/static/images/slide-1.jpg"/>*/}
                    <div className={classes.slideContainer}>
                        <img src="/static/images/slide-1.jpg" alt="Slide 1" className={classes.slideImage} />
                        <div className={classes.slideContent}>
                            <h2 className={classes.slideTitle}>Discover Our New Collection</h2>
                            <p className={classes.slideDescription}>Find the perfect furniture pieces for your home.</p>
                            <button className={classes.slideButton}>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={classes.slideTwo}>
                    {/*<img src="/static/images/slide-2.jpg" />*/}
                    <div className={classes.slideContainer}>
                        <img src="/static/images/slide-2.jpg" alt="Slide 2" className={classes.slideImage} />
                        <div className={classes.slideContent}>
                            <h2 className={classes.slideTitle}>Create Your Dream Space</h2>
                            <p className={classes.slideDescription}>Upgrade your living space with our stylish furniture.</p>
                            <button className={classes.slideButton}>Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className={classes.slideThree}>
                    {/*<img src="/static/images/slide-3.jpg"/>*/}
                    <div className={classes.slideContainer}>
                        <img src="/static/images/slide-3.jpg" alt="Slide 2" className={classes.slideImage} />
                        <div className={classes.slideContent}>
                            <h2 className={classes.slideTitle}>Limited Time Offer</h2>
                            <p className={classes.slideDescription}>Get exclusive discounts on selected items.</p>
                            <button className={classes.slideButton}>Shop Sale</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}