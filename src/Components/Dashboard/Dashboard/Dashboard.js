import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppoinmentsByDate/AppointmentsByDate';
import { UserContext } from '../../../App';
import './Dashboard.css'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
        fetch('http://localhost:4000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="dashboard col-md-5 d-flex justify-content-center">
                <Calendar
                className="cal"
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="dashboard col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;