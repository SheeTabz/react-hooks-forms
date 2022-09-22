import React, { useState } from "react";

function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstName(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastName(event) {
  //   setLastName(event.target.value);
  // }
  const [newsletter, setNewsletter] = useState(false);
  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  return (
    
    <form>
      <input type="text" value={props.firstName} onChange={props.handleFirstNameChange}  />
      <input type="text" value={props.lastName} onChange={props.handleLastNameChange}/><br/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        checked={newsletter}
        onChange={handleNewsletterChange}
      /><br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
