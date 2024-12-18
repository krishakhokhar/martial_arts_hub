// import React from 'react'
import React, { useRef } from "react";
import Slider from "react-slick";
import { CiSearch } from "react-icons/ci";
import './Slider.css'
import Button from "./Button";
import slide1 from '../../image/home/6.png';
import slide2 from '../../image/home/7.png';
import slide3 from '../../image/home/8.png';
import slide4 from '../../image/home/9.png';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";


function Slider1() {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div >
            <section className='slider'>
                <div className="find-div">
                    <div className="Categories">
                        <h2>Explore our Categories</h2>
                        <div className="relative">
                            <input type="text" placeholder="search category" />
                            <CiSearch className="serch" />
                            <Button className='serch-btn' text={"Find"} />
                        </div>
                    </div>
                </div>
                <div className="slide-div">                
                    <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        <div key={1} className="slide-card">
                            <img src={slide1} alt="img" />
                            <h2>Wrestling</h2>
                            <p>A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.</p>
                             <Button className="btn2" text={"Read More"}/>
                        </div>
                        <div key={2} className="slide-card">
                            <img src={slide2} alt="img" />
                            <h2>Brazilian Jiu Jitsu</h2>
                            <p>A ground-based martial art emphasizing submissions and positional control using leverage and technique.</p>
                             <Button className="btn2" text={"Read More"}/>
                        </div>
                        <div key={3} className="slide-card">
                            <img src={slide3} alt="img" />
                            <h2>Judo</h2>
                            <p>A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.</p>
                             <Button className="btn2" text={"Read More"}/>
                        </div>
                        <div key={4} className="slide-card">
                            <img src={slide4} alt="img" />
                            <h2>Boxing</h2>
                            <p>A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.</p>
                             <Button className="btn2" text={"Read More"}/>
                        </div>
                        <div key={5} className="slide-card">
                        <img src={slide2} alt="img" />
                        <h2>Brazilian Jiu Jitsu</h2>
                            <p>A ground-based martial art emphasizing submissions and positional control using leverage and technique.</p>
                             <Button className="btn2" text={"Read More"}/>
                        </div>


                    </Slider>
                    <div style={{ textAlign: "center" }} className="btn-3">
                        <button className="button previous" onClick={previous}>
                        <GrFormPreviousLink className="under-next" />
                        </button>
                        <button className="button next" onClick={next}>
                        <GrFormNextLink className="under-next"/>
                        </button>
                    </div>
                </div>
                </div>

            </section>
        </div>
    )
}
export default Slider1
