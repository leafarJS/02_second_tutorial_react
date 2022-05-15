import React, { useState } from 'react';
//use always of begins
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally
const variableText = 'trash';
const UseStateBasics = () => {
  const [text, setText] = useState('trash', variableText);

  const handleText = () => {
    text == variableText ? setText('finish here') : setText('game over');
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleText}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
