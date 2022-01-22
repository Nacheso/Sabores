import React, { Component } from "react";

class CoctelSolo extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <h1>CÓCTEL</h1>
        <p>{match.params.CoctelIndex}</p>
      </>
    );
  }
}

export default CoctelSolo;
