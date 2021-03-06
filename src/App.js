import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from 'react';

function App() {

  const [contactData, setContactData] = useState([]);
  const [appointmentData, setAppointmentData] = useState([]);



  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };



  // Function to create a new Contact object and add it to the Contact state:
  const addContact = ( contactName, phoneNumber, emailAdress ) => {

    let newContact = {
      name: contactName,
      phone: phoneNumber,
      email: emailAdress
    }

    setContactData((contactData) => [...contactData, newContact])

  };


  // Function to create a new Appointment object and add it to the Appointment state:
  const addAppointment = ( appointmentName, appointmentContact, appointmentDate, appointmentTime ) => {

    let newAppointment = {
      title: appointmentName,
      contact: appointmentContact,
      date: appointmentDate,
      time: appointmentTime
    }

    setAppointmentData((appointmentData) => [...appointmentData, newAppointment])

  };



  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path ="/contacts">
            <ContactsPage addContact={addContact} contactData={contactData} />
          </Route>
          <Route path ="/appointments">
            <AppointmentsPage addAppointment={addAppointment} appointmentData={appointmentData} contactData={contactData} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addContact={addContact} contactData={contactData} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage addAppointment={addAppointment} appointmentData={appointmentData} contactData={contactData} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;




/* Test Data
  const [contactData, setContactData] = useState([
    {
      name: 'nome test 1',
      phone: '959600234',
      email: 'teste@gmail.com'
    },
    {
      name: 'nome test 2',
      phone: '967234689',
      email: 'teste2@mail.com'
    }
  ]);

  
  const [appointmentData, setAppointmentData] = useState([
    {
      title: 'appointment teste 1',
      contact: 'Maria',
      date: '05/02/2021',
      time: '15:00'
    },
    {
      title: 'appointment teste 2',
      contact: 'Jos??',
      date: '10/10/2020',
      time: '18:00'
    }
  ]);
*/