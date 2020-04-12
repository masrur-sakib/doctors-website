import React from 'react';
import './addAppointment.css'

const addAppointment = () => {
    // Get Data 
    fetch('http://localhost:4300/appointments')
        .then(res => res.json())
        .then(data => displayAppointments(data));
    // document.getElementById('username').innerText = data;

    function displayAppointments(data) {
        const appointmentContainer = document.getElementById('appointment-list')
        for (let i = 0; i < data.length; i++) {
            const appointment = data[i];
            appendAppointment(appointment, appointmentContainer);
        }
    }
    function appendAppointment(appointment, appointmentContainer) {
        const info = document.createElement("li");
        info.innerText = `${appointment.Time}--${appointment.Name}--${appointment.Phone}--${appointment.Email}--${appointment.Date}`;
        appointmentContainer.appendChild(info);
    }

    // Post data to the server 
    const btnAddAppointment = document.getElementById('addAppointment');
    btnAddAppointment.addEventListener('click', () => {
        const apTime = document.getElementById('ap-time').value;
        const apName = document.getElementById('ap-name').value;
        const apPhone = document.getElementById('ap-phone').value;
        const apEmail = document.getElementById('ap-email').value;
        const apDate = document.getElementById('ap-date').value;
        const apInfo = {
            Time: apTime,
            Name: apName,
            Phone: apPhone,
            Email: apEmail,
            Date: apDate
        };
        console.log(apInfo);
        // post 
        fetch('http://localhost:4300/addAppointment', {
            method: 'POST',
            body: JSON.stringify(apInfo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                updateAppointment(data)
                // Input clean 
                document.getElementById('ap-name').value = '';
                document.getElementById('ap-time').value = '';
                document.getElementById('ap-phone').value = '';
                document.getElementById('ap-email').value = '';
                document.getElementById('ap-date').value = '';


                document.getElementById('success-message').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('success-message').style.display = 'none';
                }, 5000)
            })
    })

    function updateAppointment(appointment) {
        const appointmentContainer = document.getElementById('appointment-list')
        appendAppointment(appointment, appointmentContainer);
        document.getElementById('appointment_info').innerText = appointment.name;
    }
    return (
        <div>
            <h1>Add Appointment</h1>
            <p id="appointment_info"></p>
            <div class="container">
                <div class="row">
                    <input type="text" class="form-control" id="ap-time" placeholder="Time"></input>
                    <input type="text" class="form-control" id="ap-name" placeholder="Name"></input>
                    <input type="number" class="form-control" id="ap-phone" placeholder="Phone"></input>
                    <input type="email" class="form-control" id="ap-email" placeholder="Email"></input>
                    <input type="date" class="form-control" id="ap-date" placeholder="Date"></input>
                    <button class="btn btn-primary" id="addAppointment" >Add Appointment</button>
                </div>
                <p id="success-message" style={{display: 'none', color: 'green'}}>Appointment Added Successfully</p>
                <ol id="appointment-list">

                </ol>
            </div>
        </div>
    );
};

export default addAppointment;