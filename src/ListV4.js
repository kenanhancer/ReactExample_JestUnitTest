import React from "react";

export default class ListV4 extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.className}`}>
        <h4 className="card-header">{this.props.header}</h4>
        <ul className="list-group list-group-flush">
          {this.props.items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
