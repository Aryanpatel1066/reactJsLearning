 // src/useContext/DisplayComponent.jsx
import React, { useContext } from 'react';
import MyContext from './MyContext';

const DisplayComponent = () => {
  const { value } = useContext(MyContext);
  return <p>Context Value: {value}</p>;
};

export default DisplayComponent;
