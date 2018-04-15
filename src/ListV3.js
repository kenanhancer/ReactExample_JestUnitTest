import React from "react";

export default ({ header, items, className }) => (
  <div className={`card ${className}`}>
    <h4 className="card-header">{header}</h4>
    <ul className="list-group list-group-flush">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
