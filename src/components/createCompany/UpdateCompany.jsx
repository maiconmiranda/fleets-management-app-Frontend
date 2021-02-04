import React from "react";
import { Wrap } from "../signUp/SignUpStyle";
import { CompanyForm } from "./CompanyForm";

export function UpdateCompany() {
  return (
    <>
      <Wrap style={{ height: "100%" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "20px",
          }}
        >
          Update your Company Details
        </h1>
        <CompanyForm />
      </Wrap>
    </>
  );
}
