import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px", marginTop: "200px"}}  className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>You New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur nulla sed, repudiandae doloremque repellendus?</p>
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;