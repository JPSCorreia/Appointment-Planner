import React from "react";



export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <input
        type="text"
        placeholder="New Contact Name"
        onChange={props.handleNameChange}
        value={props.contactName}
      />
      <input
        type="text"
        placeholder="New Contact Phone"
        onChange={props.handlePhoneChange}
        value={props.contactPhone}
        pattern='^[0-9\-\+]{9,15}$'
      />
      <input
        type="text"
        placeholder="New Contact Email"
        onChange={props.handleEmailChange}
        value={props.contactEmail}
      />
      <input type="submit" value="Add Contact" />
  </form>
  );
};