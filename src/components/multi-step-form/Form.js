import React, { useState } from "react";
import { register } from "../../backend/firebase-utility";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import './Form.css';
import { useNavigate } from "react-router-dom";

const Form = () => {
    let navigation = useNavigate();
  const [page, setPage] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  // Template for DB
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
  });

  const FormTitles = ["Sign Up", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else{
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "50%" : page == 1 ? "100%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1 className="form-title">{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                // For testing, not leaving this monster of a code here long.
                if (formData.email != "" && formData.firstName != "" && formData.lastName != "" && formData.password != "" && formData.phoneNumber != "" && formData.username != "") {
                  register(formData.email,
                    formData.password,
                    formData.firstName + " " + formData.lastName,
                    formData.username,
                    formData.phoneNumber)
                  navigation('/profile');
                } else{
                  let emsg = "Not all required fields are filled."
                  setErrorMsg(emsg)
                }
                
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      {errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  );
}

export default Form;