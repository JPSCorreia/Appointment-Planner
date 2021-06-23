import React from "react";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2 onClick={props.addAppointment}>Add Appointment +</h2>
        <form onSubmit={handleSubmit} ></form>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <ul className="AppointmentList">
          {props.appointmentData.map((appointment) => (
            <p>{appointment.title}: {appointment.time} {appointment.date}</p>
          ))
          }
        </ul>
      </section>
    </div>
  );
};
