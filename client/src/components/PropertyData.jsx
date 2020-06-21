import React from 'react';

const PropertyData = (props) => (
  <div>
      <div>
        <span>
          ${this.state.propertyData.nightly_rate}
        </span>
        <span> </span>
        <span>
          / night
        </span>
      </div>
      <div>
      <span>
        {/* add the star here */}
        {this.state.propertyData.rating}
      </span>
      <span> </span>
      <span>({this.state.propertyData.reviews})</span>
      </div>
    </div>
);


export default PropertyData;
