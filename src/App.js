import React from 'react';

class Change extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square1: 'red',
      square2: 'blue'
    };
  }

  handleSquareClick = () => {
    this.setState(prevState => ({
      square1: prevState.square2,
      square2: prevState.square1
    }));
  };

  render() {
    const { square1, square2 } = this.state;

    return (
      <div>
        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: square1
          }}
          onClick={this.handleSquareClick}
        >
        </div>
        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: square2
          }}
          onClick={this.handleSquareClick}
        >
        </div>
      </div>
    );
  }
}

export default Change;
