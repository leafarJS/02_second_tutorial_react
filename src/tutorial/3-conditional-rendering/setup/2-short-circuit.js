import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';
  //console.log(secondValue);
  return (
    <>
      <h1>{text || 'jorge rafael'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p> is true</p> : <small className='btn'> is false</small>}

      {/* {text && <h1>hello world</h1>}
      {!text && <h2>good bye world</h2>} */}
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
    </>
  );
};

export default ShortCircuit;
