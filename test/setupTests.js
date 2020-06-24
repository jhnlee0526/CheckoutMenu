import React from 'react';
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// "jest": {
//   "snapshotSerializers": ["enzyme-to-json/serializer"],
//   "setupFiles": ["./test/setupTests.js"],
// },

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;