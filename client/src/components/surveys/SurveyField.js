// SurveyField contaons logic to render a single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  // console.log(props);
  // console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5 px" }} />
      <div className="red-text" style={{ marginBottom: "20 px" }}>
        {touched && error}
      </div>
    </div>
  );
};
