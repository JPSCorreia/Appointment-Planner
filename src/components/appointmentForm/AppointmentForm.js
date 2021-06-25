import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = (props) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.handleSubmit} >
    <input
      type="text"
      placeholder="New Appointment Title"
      onChange={props.handleTitleChange}
      value={props.appointmentTitle}
      pattern="^.{2,35}$"
    />
    <input
      type="date"
      placeholder="New Appointment Date"
      onChange={props.handleDateChange}
      value={props.appointmentDate}
      min={getTodayString}
    />
    <input
      type="time"
      placeholder="New Appointment Time"
      onChange={props.handleTimeChange}
      value={props.appointmentTime}
    />
    <ContactPicker
      contactData={props.contactData}
      onChange={props.handleAppointmentContactChange}
    />
    <input type="submit" value="Add Appointment" />
</form>
  );
};
