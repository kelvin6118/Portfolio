import React, { useState } from "react";

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
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailname">Name:</label>
        <input type="text" id="emailname" required />
      </div>
      <div>
        <label htmlFor="emailemail">Email:</label>
        <input type="email" id="emailemail" required />
      </div>
      <div>
        <label htmlFor="emailmessage">Message:</label>
        <textarea id="emailmessage" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default Email_Message;
