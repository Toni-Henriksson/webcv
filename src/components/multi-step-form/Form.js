import React, { useState } from "react";
import { register, saveUserWorkExperience } from "../../backend/firebase-utility";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import './Form.css';
import { useNavigate } from "react-router-dom";

const Form = () => {
    let navigation = useNavigate();
  const [page, setPage] = useState(0);

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    experience: "",
    education: "",
    skills: "",
    links: "",
    phoneNumber: "",
  });
  const [exData, setExData] = useState([
    ["Inexxxx partners", "10/2012 - 10/2022", "Operaattori"],
    ["Faceboook", "10/2022 - 12/2022", "Ohjelmoija"]
  ]);
  const [edData, setEdData] = useState([
    ["Lab University of Applied Sciences", "10/2022 - 12/2022", "Bachelor of Software Engineering"],
    ["Edupoli", "10/2022 - 12/2022", "Electrician"]
  ]);

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
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
                alert("FORM SUBMITTED");
                console.log(exData);
                register(formData.email, 
                        formData.password, 
                        formData.firstName + " " + formData.lastName,
                        formData.username,
                        formData.experience,
                        formData.education,
                        formData.skills,
                        formData.links,
                        formData.phoneNumber).then(() => { saveUserWorkExperience(exData) })
                //saveUserWorkExperience(exData);
                navigation('/profile');
                
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;