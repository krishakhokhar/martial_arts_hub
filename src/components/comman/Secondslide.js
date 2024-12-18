import Slider from "react-slick";
import img1 from '../../image/home/10.png';
import img2 from '../../image/home/11.png';
import img3 from '../../image/home/12.png';
import img4 from '../../image/home/13.png';
import './Secondslide.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { useRef } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import Button from '../comman/Button'
// import { useNavigate } from "react-router-dom";

const slider = [
    {
        img: img1,
        name: "Keyn Mojho",
        experience: "8+ years of experience"

    },
    {
        img: img2,
        name: "Marry Jhon",
        experience: "2+ years of experience"

    },
    {
        img: img3,
        name: "Jhon Martin",
        experience: "5+ years of experience"

    },
    {
        img: img4,
        name: "Kiya Jhon",
        experience: "5+ years of experience"


    },
]

export default function Secondslide() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
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
        <div>
            <div>
                <div className="slider-container">
                    <Slider ref={slider => { sliderRef = slider; }} {...settings}>
                        {slider.map((slide, index) => (
                            <div key={index} className="slide-container">
                                <IoMdHeartEmpty className="hert" />
                                <img src={slide.img} alt="img" className="sliderimg" />
                                <div>
                                    <div className="star">
                                        <div className="flex items-center star2" >
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                        </div>
                                        <span className="rating">4.3 (1200 Ratings)</span>
                                    </div>
                                    <div className="text">
                                        <h3>{slide.name}</h3>
                                        <p>{slide.experience}</p>
                                    </div>
                                    <div className="btn-flex items-center mt-4">
                                        <div>
                                            <Button text={'View Profile'} className="profile-btn" />
                                        </div>
                                        <Button text={'Send a message'} className="message-btn" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div style={{ textAlign: "center" }} className="btn-3 btn-3s">
                        <button className="button previous" onClick={previous}>
                            <GrFormPreviousLink className="under-next prev2" />
                        </button>
                        <button className="button next" onClick={next}>
                            <GrFormNextLink className="under-next next2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
