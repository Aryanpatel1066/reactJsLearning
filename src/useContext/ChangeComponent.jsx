 // src/useContext/ChangeComponent.jsx
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChangeComponent = () => {
  const { setValue } = useContext(MyContext);
  return (
    <button onClick={() => setValue('New Value')}>Change Value</button>
  );
};

export default ChangeComponent;
