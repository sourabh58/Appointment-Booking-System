import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/appointments');
      setAppointments(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Upcoming Appointments</h1>
     <h1>Upcoming Appointments</h1>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <h2>{appointment.service}</h2>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
