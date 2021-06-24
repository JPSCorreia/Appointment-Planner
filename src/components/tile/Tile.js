import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
    
    {Object.values(props.objectData).map((objectData, i) => 
      <p 
        className='tile-title' 
      >
        Contact #{i+1}: {Object.keys(objectData)} {Object.values(objectData)}
      </p>
    )}
     


     
    </div>
  );
};
      /*
      attempt #1:

      <p className='tile-title'><b>Name:</b> {props.objectData.name}</p> 
      <p className='tile-title'><b>Phone Number:</b> {props.objectData.phone}</p>
      <p className='tile-title'><b>Email Adress:</b> {props.objectData.email}</p>



      attempt #2:

          {props.objectData.map((objectData, i) => 
      <div>
        <br></br>
      <p 
        className='tile-title' 
        obj-name={objectData} 
        array={Object.values(objectData)}
        key={i}
      >
        Contact #{i+1}: 
        {Object.keys(objectData)[i]} {Object.values(objectData)[i]}
      </p>
    
      </div>
    )}
      */