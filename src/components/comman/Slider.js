// import React from 'react'
import React, { useRef, useState } from "react";
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
import { Modal } from 'react-bootstrap';


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
    const slideData = [
        {
            id: 1,
            imgSrc: slide1,
            title: "Wrestling",
            description: "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
            buttonText: "Read More"
        },
        {
            id: 2,
            imgSrc: slide2,
            title: "Brazilian Jiu Jitsu",
            description: "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
            buttonText: "Read More"
        },
        {
            id: 3,
            imgSrc: slide3,
            title: "Judo",
            description: "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
            buttonText: "Read More"
        },
        {
            id: 4,
            imgSrc: slide4,
            title: "Boxing",
            description: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
            buttonText: "Read More"
        },
        {
            id: 5,
            imgSrc: slide2,
            title: "Brazilian Jiu Jitsu",
            description: "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
            buttonText: "Read More"
        }
    ];
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleOpenModal = (slide) => {
        setCurrentSlide(slide);
        setShowViewMoreModal(true);
    };

    const handleCloseModal = () => {
        setShowViewMoreModal(false);
        setCurrentSlide(null);
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
                            {slideData.map(slide => (
                                <div key={slide.id} className="slide-card">
                                    <img src={slide.imgSrc} alt="img" />
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                    <button className="btn2" onClick={() => handleOpenModal(slide)}>View More</button>
                                </div>
                            ))}
                        </Slider>
                        <div style={{ textAlign: "center" }} className="btn-3">
                            <button className="button previous" onClick={previous}>
                                <GrFormPreviousLink className="under-next" />
                            </button>
                            <button className="button next" onClick={next}>
                                <GrFormNextLink className="under-next" />
                            </button>
                        </div>
                        {/* Modal */}
                        <Modal show={showViewMoreModal} onHide={handleCloseModal} centered dialogClassName="modelo_silder">
                            {/* <Modal.Header closeButton></Modal.Header> */}
                            <Modal.Body className="sliderbody">
                                {currentSlide && (
                                    <>
                                        <img src={currentSlide.imgSrc} alt={currentSlide.title} className="modal-image" />
                                        <div className="suneddilidtitle">
                                            <h2>{currentSlide.title}</h2>
                                        </div>
                                        <div className="descriptionviw">
                                            <textarea rows='4' cols='60' value={currentSlide.description}></textarea>
                                        </div>

                                    </>
                                )}
                            </Modal.Body>
                        </Modal>

                    </div>
                </div>

            </section>
        </div>
    )
}
export default Slider1
