import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState(" ");
  const [pass, setPass] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [nameVal, setNameVal] = useState(" ");
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name: name, email: email, pass: pass });
    setNameVal(name);
    setName(" ");
    setEmail(" ");
    setPass(" ");
  }
  return (
    <>
      <h1 className="h1">Hello {nameVal} 🙃</h1>
      <div className="main">
        <form onSubmit={handleSubmit}>
          name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
          />{" "}
          <br />
          password:{" "}
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control"
          />{" "}
          <br />
          email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
          />{" "}
          <br />
          <button className="form-control btn btn-primary">submit</button>
        </form>
      </div>
    </>
  );
}
