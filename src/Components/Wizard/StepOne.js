import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizard.css"

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // const { name, address, city, state, zip } = this.state;
    return (
      <div className="wzrd">
        <div>
          <h3>Wizard</h3>
          <form>
            <div className="forms">
              <input
                type="text"
                name="name"
                placeholder="Property Name"
                value={this.state.name}
                onChange={e => this.changeHandler(e)}
                id="name"
              />
            </div>
            <div className="forms">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={this.state.address}
                onChange={e => this.changeHandler(e)}
                id="address"
              />
            </div>
            <div className="forms">
              <input
                type="text"
                name='city'
                placeholder="City"
                value={this.state.city}
                onChange={e => this.changeHandler(e)}
                id="city"
              />
            </div>
            <div className="forms">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={this.state.state}
                onChange={e => this.changeHandler(e)}
                id="state"
              />
            </div>
            <div className="forms">
              <input
                type="text"
                name="zip"
                placeholder="Zipcode"
                value={this.state.zip}
                onChange={e => this.changeHandler(e)}
                id="zip"
                maxLength="5"
              />
            </div>
          </form>
        <div>
        <Link to="/wizard/step2">
                    <button>Next Step</button>
                </Link>
        </div>
        </div>
      </div>
    );
  }
}
