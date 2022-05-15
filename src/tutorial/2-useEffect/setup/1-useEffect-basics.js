import React, { useState, useEffect, useLayoutEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// por defecto se ejecuta después de cada renderizado
// función de limpieza
// segundo parámetro

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call use Effect');
    if (value >= 1) {
      document.title = `new message (${value})`;
    }
  }, [value]);
  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
