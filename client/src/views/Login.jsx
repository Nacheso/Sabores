import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", nick: "", telefono: "", password: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.name });
    this.setState({ nick: event.target.nick });
    this.setState({ telefono: event.target.telefono });
    this.setState({ password: event.target.password });
    this.setState({ email: event.target.email });
  }
  handleSubmit(event) {
    alert("¡" + this.state.nick + "Has entrado al local!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>NAME</p>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            <p>NICK</p>
            <input
              type="text"
              value={this.state.nick}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            <p>TELEFONO</p>
            <input
              type="text"
              value={this.state.telefono}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            <p>PASSWORD</p>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            <p>EMAIL</p>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <p>
            <input type="submit" value="¡PASE Y TÓMESE ALGO!" />
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
