import React from "react";
import { Input, Checkbox } from "antd";

class TODOlisting extends React.Component {
  state = {
    todos: [],
    selectedvalue: ""
  };

  handlTodoSection = event => {
    console.log("value", event.target.value);
    this.setState({ todos: event.target.value });
  };

  onChange = selectedvalue => {
    console.log("checkedvalue = ", selectedvalue);
    this.setState({ selectedvalue: selectedvalue });
  };

  render() {
    const { todos, selectedvalue } = this.state;
    return (
      <div>
        {todos.map((item, id) => (
          <>
            <Checkbox onChange={this.onChangeTime} value={id.checked} />
            <Input
              type="text"
              value={item}
              onKeyPress={event =>
                event.id === "Enter" && this.handlTodoSection(event)
              }
            />
          </>
        ))}
        <h1>Title</h1>
        <Checkbox onChange={this.onChange} value={selectedvalue} />
        <Input
          type="text"
          onKeyPress={event =>
            event.id === "Enter" && this.handlTodoSection(event)
          }
        />
      </div>
    );
  }
}

export default TODOlisting;
