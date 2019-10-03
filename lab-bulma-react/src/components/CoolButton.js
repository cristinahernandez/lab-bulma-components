import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    console.log(this.props);
    //Refactor these
    let classCase = " button ";
    if (this.props.isDanger) {
      classCase += " is-danger ";
    }
    if (this.props.isSmall) {
      classCase += " is-small ";
    }
    if (this.props.isSuccess) {
      classCase += " is-success ";
    }
    if (this.props.isPrimary) {
      classCase += " is-primary ";
    }
    if (this.props.isWarning) {
      classCase += " is-warning ";
    }
    if (this.props.isInfo) {
      classCase += " is-info ";
    }
    if (this.props.className) {
      classCase += this.props.className;
    }
    return <button className={classCase}>{this.props.children}</button>;
  }
}

export default CoolButton;
