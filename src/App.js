import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
