import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px 0;
  padding: 0 3px 0 5px;
  text-align: center;
  overflow: hidden;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
  cursor: pointer;
`;

const Rate = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const Star = styled.img`
  width: 8px;
  height: auto;
  margin: 0 3px;
  cursor: text;
`;

const Info = styled.span`
  font-size: 9px;
  color: #717171
`;

const PerNight = styled.span`
  font-size: 11px;
`;

const PropertyData = (props) => (
  <Container>
    <Left>
      <Rate>${props.data.nightly_rate}</Rate>
      <span> </span>
      <PerNight>/ night</PerNight>
    </Left>
    <Right>
      <span>
        <Star src="https://airbnbavatars.s3-us-west-1.amazonaws.com/icons/star-8-24.png" />
      </span>
      <Info>{props.data.rating}</Info>
      <span> </span>
      <Info>({props.data.reviews})</Info>
    </Right>
  </Container>
);

export default PropertyData;
