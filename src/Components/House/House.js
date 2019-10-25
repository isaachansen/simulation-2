import React from "react";

export default class House extends React.Component { 
  render() {
    
    return (
      <div>
            <div>Property Name: {this.props.house.name}</div>
            <div>Address: {this.props.house.address}</div>
            <div>City: {this.props.house.city}</div>
            <div>State: {this.props.house.state}</div>
            <div>Zip: {this.props.house.zip}</div>
        </div>
    )
  }
    
}