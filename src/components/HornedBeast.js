

import React from 'react';
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.favorites = '❤️';
    this.state = { timeOfClick: 0 };
  }

  timeClickIncrease = (event) => {
    this.setState({ timeOfClick: this.state.timeOfClick + 1 });
  }
  render() {
    return (
      <div>
      

<Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick = {this.timeClickIncrease} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description} {this.state.timeOfClick} {this.favorites}
                        </Card.Text>
                        {/* <Button onClick={this.timeClickIncrease} variant="primary">vote for favorite</Button> */}
                    </Card.Body>
                </Card>
      </div>
    )
  }
}

export default HornedBeast;