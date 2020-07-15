import React from "react";
import { Icon } from "antd";
import styled from "styled-components";
import "../index.css";

const Show = styled.div`
  height: 34px;
  margin-right: 4px;
  color: ${(props) => props.color};
  font-size: 20px;
  padding-right: 40px;
  padding-left: 8px;
  padding-top: 2px;
  margin-top: 10px;
`;

class SideBar extends React.Component {
  state = {
    show: false,
  };

  handlehover = () => {
    this.setState({ show: true });
  };
  handleout = () => {
    this.setState({ show: false });
  };
  render() {
    const { title, type, link } = this.props;
    console.log(this.state.show);
    return (
      <>
        <div
          style={{
            height: 40,
            width: 40,

            marginBottom: 10,
            display: "flex",
            flexDirection: "row-reverse",
          }}
          onMouseOver={this.handlehover}
        >
          <div style={{ color: this.props.colorr }} className="image-home">
            <Icon type={type} />
          </div>

          <div>
            {this.state.show && (
              <Show color={this.props.color} className="show-title">
                <a href={link} target="_blank">
                  {title}
                </a>
              </Show>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default SideBar;
