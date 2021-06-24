import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
    
    {props.objectData.map((objectData, i) => 
      <div> 
        <br></br>
        <b>Contact #{i+1}:</b>
        {Object.values(objectData).map((objectData2, i) =>
          <p 
            className='tile-title' 
          >
            {Object.keys(objectData)[i]}: {objectData2}
          </p>
        )}
      <br></br>
    
      </div>
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