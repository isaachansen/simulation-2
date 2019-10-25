import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: [
        {
          id: "",
          name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          img: ""
        }
      ]
    };
    this.getHouse = this.getHouse.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getHouse();
  }
  getHouse() {
    axios
      .get("/api/house")
      .then(res => {
        this.setState({
          house: res.data
        });
      })
      .catch(err => console.log(err));
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(() => this.getHouse());
  }

  render() {
    console.log(this.state);
    const mappedHouses = this.state.house.map(house => {
      return (
        <div key={this.state.house.indexOf(house)}>
          <House house={house} deleteHouse={this.deleteHouse} />
        </div>
      );
    });
    return (
      <div>
        <h3>Dashboard</h3>
        <Link to="/wizard/step1" className="wizards">
          <button>Add New Property</button>
        <div className="mapped-houses">{mappedHouses}</div>
        </Link>
      </div>
    );
  }
}
//   render() {
//     return (
//       <div>
//         <button className="wizard-btn">
//           <Link to="/wizard" className="wizards">
//             Add To Property
//           </Link>
//         </button>
//         <House />
//       </div>
//     );
//   }
// }
