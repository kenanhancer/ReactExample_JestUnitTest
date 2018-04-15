import React from "react";
import { render } from "react-dom";
import List from "./List";
import ListV2 from "./ListV2";
import ListV3 from "./ListV3";
import ListV4 from "./ListV4";
import ListV5 from "./ListV5";

const names = ["kenan", "enes", "John", "Arnold", "Maria"];

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <List className="bg-primary" header="Names" items={names} />
      </div>
      <div className="col">
        <ListV2 className="bg-secondary" header="Names" items={names} />
      </div>
      <div className="col">
        <ListV3 className="bg-success" header="Names" items={names} />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col">
        <ListV4 className="bg-danger" header="Names" items={names} />
      </div>
      <div className="col">
        <ListV5 className="bg-warning" header="Names" items={names} />
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
