import React from "react";
import { Wrap } from "../signUp/SignUpStyle";
import { CompanyForm } from "./CompanyForm";
import { HomeNavBar } from "../homeNavBar/HomeNavBar";
import { Footer } from "../footer/Footer";


// This is the page that will display the create company on browser
export function CreateCompany() {
  return (
    <>
      <Wrap style={{ height: "100%" }}>
        <HomeNavBar />
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "35px",
          }}
        >
          Add your Company Details
        </h1>
        {/* company form to create company */}
        <CompanyForm />
      </Wrap>
      <Footer />
    </>
  );
}
