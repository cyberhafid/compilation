import React, { Component } from "react";

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.replace("*", "") });
  }
  render() {
    return (
      <div >
      <form>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <h2 className="App"> {this.state.value} </h2>
      </form>
      </div>
    );
  }
}

export default MyTitleForm;