import React from "react";



export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <input
        type="text"
        placeholder="New Contact Name"
        onChange={props.handleNameChange}
        value={props.contactName}
        pattern="^.{2,35}$"
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
        pattern="(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
      />
      <input type="submit" value="Add Contact" />
  </form>
  );
};

