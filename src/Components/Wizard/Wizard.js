import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
// import StepThree from "./StepThree"

export default class Wizard extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          {/* <Route component={StepThree} path="/wizard/step3" /> */}
        </Switch>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
