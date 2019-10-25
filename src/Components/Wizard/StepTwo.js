import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Wizard</h3>
        <form>
          <div class="forms">
            <input
              placeholder="Image URL"
              type="text"
              name="img"
              value={this.state.img}
              onChange={e => this.changeHandler(e)}
              id="img"
            />
          </div>
        </form>
           <Link to="/wizard/step1">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}
