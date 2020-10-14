<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then((response) => response.json())
      .then((json) => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className="App">
        <img className="logo" src={logo}></img>
        <br />
        <div>Welcome to the blockchain...</div>
        <br />
        <div>
          <Link to="/blocks">Blocks</Link>
        </div>
        <div>
          <Link to="/conduct-transaction">Conduct a Transaction</Link>
        </div>
        <div>
          <Link to="/transaction-pool">Transaction Pool</Link>
        </div>
        <br />
        <div className="WalletInfo">
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

export default App;
=======
import React, { Component } from "react";
import { response } from "express";
// require("require/server").listen(1234);

class App extends Component {
  state = { walletInfo: { address: "fooxv6", balance: 9999 } };

  componentDidMount() {
    fetch("http://localhost:3000/api/wallet-info").then((response) =>
      console.log("response", response)
    );
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div>
        <div>Welcome to the blockchain...</div>
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
      </div>
    );
  }
}

export default App;
>>>>>>> e3621a1a869c93ba8ccc6675145973c05e618290
