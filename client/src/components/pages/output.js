import React, { Component } from "react";
import { temp_form, temp_button, temp_input } from "../templates/templates";

import DisplayButton from "../elements/displaybutton";

class Output extends Component {
  constructor(props) {
    super(props);

    this.inputString = "";
    this.inputs = this.props.state.inputs.map(key => {
      this.inputString += `\n<Input id={'input'+${
        key
      }} onChange={this.onChange}/>`;
    });

    this.props.state.outputType === 'temp_button'
    ? this.strOutput = temp_button(this.props.state,this.inputString) : this.strOutput = temp_form(this.props.state,this.inputString);

    this.content = {
      temp_button: temp_button(this.props.state,this.inputString),
      temp_form: temp_form(this.props.state,this.inputString),
      temp_input: temp_input(this.props.state,this.inputString)
    };
  }
  render() {
    return (
      <div id="page-output" className="page">
        <div id="output-container">
          <h3>{this.props.outputHeaderTop}</h3>
          {this.props.state[this.props.state.outputType].map(button => {
            return <DisplayButton
              key={button[0]}
              id={`output-button${button[0]}`}
              onClick={this.props.pageHandler}
              value={`${button[0]}.dl`}
              content={this.content[button[1]]}
              state={this.props.state}
              text={button[0]}
            />;
          })}
          <h3>{this.props.outputHeaderBot}</h3>
          <hr />
          <div>
            <pre>{this.strOutput}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
