import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = (props) => {
  return (
    <div>
      <ul>
        
          <Tile 
            objectData={props.objectData}
          />
        
      </ul>
    </div>
  );
};


/*

export const TileList = (props) => {
  return (
    <div>
      <ul>
        {props.objectData.map((objectData) => (
          <Tile 
            objectData={objectData}
          />
        ))}
      </ul>
    </div>
  );
};
*/