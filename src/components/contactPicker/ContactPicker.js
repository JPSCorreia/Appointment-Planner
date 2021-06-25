import React from "react";


export const ContactPicker = (props) => {
  return (
    <div>
      <label for="appointments">Choose an Appointment Contact:</label>
      <select name='appointments' onChange={props.onChange}>
        <option 
          key=''
          value=''
          selected='selected'
        >
        </option>
        {props.contactData.map((contactData, i) => 
          <option
            key={i}
            value={contactData.name}
          >
            {contactData.name}
          </option>
        )}

      </select>
     </div>
  );
};
