
import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {



  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentContact, setAppointmentContact] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

      // Check if theres already this name in the list and add it if it doesnt:
      if ( appointmentTitle !== '' && appointmentContact !== '' && appointmentDate !== '')  {
  
        props.addAppointment(appointmentTitle, appointmentContact, appointmentDate, appointmentTime)
  
        setAppointmentTitle('');
        setAppointmentContact('');
        setAppointmentDate('');
        setAppointmentTime('');
  }
   
  };


const handleTitleChange = (event) => {
   setAppointmentTitle(event.target.value)
    
}

const handleAppointmentContactChange = (event) => {
  setAppointmentContact(event.target.value)
}

const handleDateChange = (event) => {
  setAppointmentDate(event.target.value)
}

const handleTimeChange = (event) => {
  setAppointmentTime(event.target.value)
}


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          handleSubmit={handleSubmit}
          handleTitleChange={handleTitleChange}
          appointmentTitle={appointmentTitle}
          handleAppointmentContactChange={handleAppointmentContactChange}
          appointmentContact={appointmentContact}
          handleDateChange={handleDateChange}
          appointmentDate={appointmentDate}
          handleTimeChange={handleTimeChange}
          appointmentTime={appointmentTime}
          objectData={props.appointmentData}
          contactData={props.contactData}
      />
      </section>
      <hr />
      <section>
        <h2>Appointments:</h2>
        <TileList 
          objectData={props.appointmentData}
        />
      </section>
    </div>
  );
};
