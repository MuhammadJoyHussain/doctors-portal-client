import React from 'react';
import featured from '../../../images/featured.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container d-flex mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="featured img-fluid" src={featured} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Exceptional Dental Care, on your term</h1>
                    <p className="text-secondary my-5">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, odio ducimus in delectus sapiente cum repudiandae dolorem asperiores quisquam eaque illum temporibus adipisci est inventore rerum eveniet! Aspernatur numquam quaerat impedit itaque quidem, soluta ex voluptatum voluptatem porro, iusto neque?
                </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;