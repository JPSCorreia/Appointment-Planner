import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'
export const ContactsPage = (props) => {

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  const displayErrorShow = {display: 'block', color: 'red'};
  const displayErrorHide = {display: 'none', color: 'red'};
  const [displayStyle, setDisplayStyle] = useState(false);
 


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if theres already this name in the contact list and add it if it doesnt:
    if (props.contactData.some( dataName => dataName['name'] === contactName )) {

      

    } else {

      props.addContact(contactName, contactPhone, contactEmail)

      setContactName('');
      setContactPhone('');
      setContactEmail('');

    }

  };


  useEffect(() => {
    if (props.contactData.some( dataName => dataName['name'] === contactName )) {
      
      setDisplayStyle(true);
    } else {
      setDisplayStyle(false);
    }
  }, [props.contactData, contactName]);


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  



  const handleNameChange = (event) => {
      setContactName(event.target.value)
      
  }

  const handlePhoneChange = (event) => {
    setContactPhone(event.target.value)
  }

  const handleEmailChange = (event) => {
    setContactEmail(event.target.value)
  }





  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      <ContactForm 
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        contactName={contactName}
        handlePhoneChange={handlePhoneChange}
        contactPhone={contactPhone}
        handleEmailChange={handleEmailChange}
        contactEmail={contactEmail}
      />
      <h6 style={displayStyle ? displayErrorShow : displayErrorHide }>Error: Duplicate Name</h6>
      </section>
      <hr />
      <section>
        <h2>Contacts:</h2>
        <TileList 
          objectData={props.contactData}
        />
      </section>
    </div>
  );
};
