import React from "react";
import { Card, Input, Checkbox } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const ActivityFilterWrapper = styled.div`
  padding: 10px;

  .ant-input  {
        border: 0px;
        border-bottom: 1px solid #fff;
    background-color: #000;
    color: #fff;
  }

  .ant-checkbox-inner {
    border-radius: 8px;
    background-color: #000;
    border: 1px solid #fff;
  }

  .title {
    color: yellow;
    border-bottom: 8px solid #fff !important;
  }

  html {
    --antd-wave-shadow-color: none;
  }

  .ant-input:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .something {
    padding: 10px;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: 1px solid #fff;
  }

  .again {
    border-bottom: 8px solid #fff;
    border-radius: 16px;
  }
`;

const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};

class TODOlist extends React.Component {
  state = {
    todos: [],
    selected: "",
    selectedTodo: ""
  };

  handleClick = value => {
    console.log("value:", value);
    const { todos } = this.state;
    this.setState({
      todos: [...todos, value]
    });
  };
  //   onChange = e => {
  //     console.log("valuename", e.target.value);
  //     this.setState({ slelected: e.target.value });
  //   };

  handleChange = event => {
    console.log("value", event.target.value);
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
    console.log("change", change);
  };

  render() {
    const { selected, selectedTodo, todos } = this.state;
    return (
      <>
        <div className="title">Title</div> 
        {todos.map(todo => (
          <ActivityFilterWrapper>
            <div
              onChange={() => {
                this.handleChange("somthing");
              }}
              //   onChange={this.handleChange}
            >
              <span className="something">
                 <Checkbox onChange={onChange}></Checkbox>
              </span>
              <span className="again">
                <Input value={todo} style={{ width: "50%" }} />
              </span>
            </div>
          </ActivityFilterWrapper>
        ))}
        <ActivityFilterWrapper>
          <div
            onChange={() => {
              this.handleClick("somthing");
            }}
          >
            <span className="something">
               <Checkbox onChange={onChange}></Checkbox>
            </span>
            <span className="again">
              <Input
                style={{ width: "50%" }}
                title="whaever"
                onChange={this.handleChange}
                name="whaterrrr"
              />
            </span>
          </div>
        </ActivityFilterWrapper>
      </>
    );
  }
}

export default TODOlist;
