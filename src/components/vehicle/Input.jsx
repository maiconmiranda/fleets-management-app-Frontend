import React from "react";
import { Form } from "react-bootstrap";

export function Input({ name, label, placeholder, type = "text" }) {
  return (
    <>

      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={name}
      />
    </>
  );
}
