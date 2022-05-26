import React from "react";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Work experience..."
        value={formData.experience}
        onChange={(e) => {
          setFormData({ ...formData, experience: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Education..."
        value={formData.education}
        onChange={(e) => {
          setFormData({ ...formData, education: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Skills..."
        value={formData.skills}
        onChange={(e) => {
          setFormData({ ...formData, skills: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Links..."
        value={formData.links}
        onChange={(e) => {
          setFormData({ ...formData, links: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Phone number..."
        value={formData.phoneNumber}
        onChange={(e) => {
          setFormData({ ...formData, phoneNumber: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;