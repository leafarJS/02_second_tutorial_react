import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const [name, setName] = useState('jorge');
  const [age, setAge] = useState(124);
  const [message, setMessage] = useState('align message');
  //console.log(person);
  const changeMessage = () => {
    setPerson({ ...person, message: 'hello fucking world' });
    //setName('rafael');
    //setAge(136);
    setMessage('good by fucking world');
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
