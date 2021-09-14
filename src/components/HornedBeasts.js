

import React from 'react';
import Card from 'react-bootstrap/Card'


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.favorites = '❤️';
    this.state = { timeOfClick: 0 };
  }

  Click = (event) => {
    event.preventDefault()
    this.setState({ timeOfClick: this.state.timeOfClick + 1 });
    this.props.handleDisplay();
    this.props.filterBeast(this.props.image_url);
    console.log(this.props.image_url)
  }
  render() {
    return (
      <div>
      

<Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick = {this.Click} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description} {this.state.timeOfClick} {this.favorites}
                        </Card.Text>
                   
                    </Card.Body>
                </Card>

      </div>
    )
  }
}

export default HornedBeast;




