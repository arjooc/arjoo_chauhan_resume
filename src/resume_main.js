import React, { Component } from "react";
import Another from "./components/Resume";
import Contacts from "./contacts";
export default class ResumeMain extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Another />
        <Contacts />
      </div>
    );
  }
}
