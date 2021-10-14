import React from "react";

export default function Template(props) {
  return (
    <>
      <div className="template" onClick={() => props.setSelectedTemplate(props.template)}>
        <div
          className="img"
          style={{ backgroundImage: `url(${props.template.url})` }}
        ></div>
      </div>
    </>
  );
}
