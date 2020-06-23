import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font: "Helvetica Neue", sans-serif;
  margin: 5px;
  text-align: center;
  overflow: hidden;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
  font-size: 75%;
  cursor: pointer;
`;

const Rate = styled.span`
  font-weight: bold;
`;

const Star = styled.img`
  width: 8px;
  height: auto;
  margin: 0 3px;
  cursor: text;
`;


const PropertyData = (props) => (
  <Container>
    <Left>
      <Rate>${props.data.nightly_rate}</Rate>
      <span> </span>
      <span>/ night</span>
    </Left>
    <Right>
      <span>
        <Star src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
      </span>
      <span>{props.data.rating}</span>
      <span> </span>
      <span>({props.data.reviews})</span>
    </Right>
  </Container>
);

export default PropertyData;
