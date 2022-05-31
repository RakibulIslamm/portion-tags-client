import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://portion-tags.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className='pt-20 pb-32'>
            <div className='px-[80px] xs:px-6 max-w-[1920px]'>
                <div className='flex justify-between items-center gap-4 pb-6'>
                    <div className='border border-gray-300 flex-1'></div>
                    <div>
                        <h1 className='text-4xl font-bold text-center flex items-center'>Testimonials</h1>
                        <p className="text-lg text-gray-600">What others say about us</p>
                    </div>
                    <div className='border border-gray-300 flex-1'></div>
                </div>
                <Slider {...settings} className='mx-auto grid grid-cols-3 xs:grid-cols-1 gap-4'>
                    {reviews.map(review => <Review key={review._id} review={review} />)}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;