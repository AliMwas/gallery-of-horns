import React from 'react';

class HornedBeast extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.Title}</h2>
        <img src={this.props.Img} alt="Rhino Image"/>
        <p>{this.props.Description}</p>
      </div>
    )
  }
}

export default HornedBeast;