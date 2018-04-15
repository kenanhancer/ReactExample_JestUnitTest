import React from "react";

export default props => {
  return (
    <div className={`card ${props.className}`}>
      <h4 className="card-header">{props.header}</h4>
      <ul className="list-group list-group-flush">
        {props.items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
