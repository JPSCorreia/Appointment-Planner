import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {props.objectData.map((objectData, i) => 
        <div> 
          <br></br>
          <b>#{i+1}:</b>
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
