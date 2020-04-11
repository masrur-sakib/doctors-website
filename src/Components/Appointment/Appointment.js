import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'

const Appointment = () => {
    return (
        <div>
            <div className='container appointment_section'>
                <h1>Appointment</h1>
                <Calendar />
            </div>
            <div className='container'>
                <h3 className='appontment_title'>Available Appointments Today</h3>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Teeth Orthodontics</h4>
                            <h5 className="card-title">7:00 AM - 8:00 AM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Cosmetic Dentistry</h4>
                            <h5 className="card-title">8:00 AM - 9:00 AM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Teeth Cleaning</h4>
                            <h5 className="card-title">9:00 AM - 10:00 AM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Cavity Protection</h4>
                            <h5 className="card-title">10:00 AM - 11:00 AM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Teeth Whitening</h4>
                            <h5 className="card-title">11:00 AM - 12:00 PM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title appontment_title">Teeth Checkup</h4>
                            <h5 className="card-title">12:00 PM - 01:00 PM</h5>
                            <p className="card-text">10 SPACES AVAILABLE</p>
                            <a href="/book-appointment"><button className='btn btn-info'>BOOK APPOINTMENT</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;