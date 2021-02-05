import React from "react";
import { Form } from "react-bootstrap";

export function Input({ name, label, onChange, placeholder, type = "text" }) {
  return (
    <>
      <Form.Group controlId="formBasiclabel">
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={name}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
}
