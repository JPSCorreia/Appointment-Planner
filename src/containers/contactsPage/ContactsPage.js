import React, { useState, useEffect } from "react";

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
        <h2 onClick={props.addContact}>Add Contact</h2> 
        
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="New Contact Name"
          onChange={handleNameChange}
          value={contactName}
        />
        <input
          type="text"
          placeholder="New Contact Phone"
          onChange={handlePhoneChange}
          value={contactPhone}
        />
        <input
          type="text"
          placeholder="New Contact Email"
          onChange={handleEmailChange}
          value={contactEmail}
        />
        <input type="submit" value="Add Contact" />
        <h6 style={displayStyle ? displayErrorShow : displayErrorHide }>Error: Duplicate Name</h6>
      </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul className="ContactList">
          {props.contactData.map((contact) => (
            <p><b>Name:</b> {contact.name}, <b>Phone Number:</b> {contact.phone}, <b>Email Adress:</b> {contact.email}</p>
          ))
          }
        </ul>
      </section>
    </div>
  );
};
