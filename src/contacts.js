import React, { Component } from "react";
import SideBar from "./components/sidebar";
import Line from "./components/line";

export default class Contacts extends Component {
  render() {
    return (
      <div className="sidebar">
        <Line colors="#0096ec"></Line>
        <SideBar
          title="Github"
          type="github"
          color="#0096ec"
          colorr="white"
          link="https://github.com/arjooc"
        />
        <SideBar
          title="Facebook"
          type="facebook"
          color="#0096ec"
          colorr="white"
          link="https://www.facebook.com/zoo3097"
        />
        <SideBar
          title="arjoo3097"
          type="instagram"
          color="#013e3e"
          colorr="white"
          link="https://www.instagram.com/zoo3097/"
        />
        <SideBar
          title="6362836717"
          type="phone"
          color="#0096ec"
          colorr="white"
        />
        <SideBar
          title="arjoochauhan44@gmail.com"
          type="mail"
          color="#0096ec"
          colorr="white"
        />
        <SideBar
          title="Resume"
          type="user"
          color="#013e3e"
          colorr="white"
          link="https://drive.google.com/file/d/1HNFiDVDzhVMlHCZlI0j-FLtKUV9ZxX5I/view?usp=sharing"
        />

        <Line colors="#0096ec"></Line>
      </div>
    );
  }
}
