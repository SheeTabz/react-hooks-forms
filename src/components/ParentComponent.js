import React, { useState } from 'react'
import Form from './Form';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    function handleFirstName(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastName(event) {
      setLastName(event.target.value);
    }
  return (
    <Form
    firstName={firstName}
    lastName={lastName}
    handleFirstNameChange={handleFirstName}
    handleLastNameChange={handleLastName}
  />
  )
}

export default ParentComponent