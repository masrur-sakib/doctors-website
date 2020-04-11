import React from 'react';
import { useForm } from 'react-hook-form';
import './BookAppointment.css';

const BookAppointment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (
        <div className="container">
            <h4>Book Your Appoinment</h4>
            <form className="appointment_form" onSubmit={handleSubmit(onSubmit)}>
                <input name="category" ref={register({ required: true })} placeholder='Category' />
                {errors.category && <span className='error'>This field is required</span>}
                <input name="name" ref={register({ required: true })} placeholder='Name' />
                {errors.name && <span className='error'>This field is required</span>}
                <input name="phone" ref={register({ required: true })} placeholder='Phone No.' />
                {errors.phone && <span className='error'>This field is required</span>}
                <input name="email" ref={register({ required: true })} placeholder='Email' />
                {errors.email && <span className='error'>This field is required</span>}
                <input name="date" ref={register({ required: true })} placeholder='mm/dd/yy' />
                {errors.date && <span className='error'>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default BookAppointment;