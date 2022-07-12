import React, { useState } from "react";
import './style.css';


const Email_Message = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { emailname, emailemail, emailmessage } = e.target.elements;
    let details = {
      emailname: emailname.value,
      emailemail: emailemail.value,
      emailmessage: emailmessage.value,
    };
    let response = await fetch("https://kelvin-porfolio.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    
  };
  return (<div id="form-container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="emailname">Name:</label>
          <input className="inputField" type="text" id="emailname" required />
        </div>
        <div className="inputDiv">
          <label htmlFor="emailemail">Email:</label>
          <input className="inputField" type="email" id="emailemail" required />
        </div>
        <div className="inputDiv">
          <label htmlFor="emailmessage">Message:</label>
          <textarea className="inputField" id="emailmessage" required />
        </div>
        <div id="contact-submit">
        <button type="submit">{status}</button>
        </div>
      </form>
      
    </div>
  );
};

export default Email_Message;
