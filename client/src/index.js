<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import App from "./components/App";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";
import "./index.css";
import Transaction from "./components/Transaction";

render(
  <HashRouter history={history}>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="/blocks" component={Blocks} />
      <Route path="/conduct-transaction" component={ConductTransaction} />
      <Route path="/transaction-pool" component={TransactionPool} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
=======
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(<App></App>, document.getElementById("root"));
>>>>>>> e3621a1a869c93ba8ccc6675145973c05e618290
