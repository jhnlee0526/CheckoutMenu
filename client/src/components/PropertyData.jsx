import React from 'react';

const PropertyData = (props) => (
  <div>
      <div>
        <span>
          ${props.data.nightly_rate}
        </span>
        <span> </span>
        <span>
          / night
        </span>
      </div>
      <div>
      <span>
        {/* add the star here */}
        {props.data.rating}
      </span>
      <span> </span>
      <span>({props.data.reviews})</span>
      </div>
    </div>
);


export default PropertyData;
