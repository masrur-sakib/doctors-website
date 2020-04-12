import React from 'react';
import { useForm } from 'react-hook-form';
import './BookAppointment.css';

const BookAppointment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>Book Your Appointment</h4>
                    <form className="appointment_form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="time" id="ap-time" ref={register({ required: true })} placeholder='Time' />
                        {errors.time && <span className='error'>This field is required</span>}
                        <input name="name" id="ap-name" ref={register({ required: true })} placeholder='Name' />
                        {errors.name && <span className='error'>This field is required</span>}
                        <input name="phone" id="ap-phone" ref={register({ required: true })} placeholder='Phone No.' />
                        {errors.phone && <span className='error'>This field is required</span>}
                        <input name="email" id="ap-email" ref={register({ required: true })} placeholder='Email' />
                        {errors.email && <span className='error'>This field is required</span>}
                        <input name="date" id="ap-date" ref={register({ required: true })} placeholder='dd/mm/yyyy' />
                        {errors.date && <span className='error'>This field is required</span>}

                        <input id="addAppointment" type="submit" />
                    </form>
                    <p id="success-message" style={{'display': 'none', 'color': 'green'}}>Appointment Added Successfully</p>

                </div>
                <div className="col-md-6">
                    <ol id="appointment-list">

                    </ol>
                </div>
            </div>



        </div>
    );
};

export default BookAppointment;