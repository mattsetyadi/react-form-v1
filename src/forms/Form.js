import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //here we set is submitted as a function so we can passing to
  //formsignUp to use that on const FormSignup as object ({submitForm}) <---
  //we need a function to make change on useState from false to true
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-4.svg" alt="spaceship" />
        </div>

        {/* is its not submitted we wanna make user to stay on sign up page
      but neither when submitted
      why !isSubmitted? because we declare it as true before
      we still need submit form inside to make submit true */}

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
