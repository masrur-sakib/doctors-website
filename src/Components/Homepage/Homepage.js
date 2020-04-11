import React from 'react';
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <div className="row homepage_first_section">
                <div className="col-md-8">
                    <h1>Your New Smile Starts Here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <a href="/appointment"><button className="btn btn-info">Appointment →</button></a>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <div className='homepage_second_section'>

            </div>
        </div>
    );
};

export default Homepage;