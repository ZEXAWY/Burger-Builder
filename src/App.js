import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
// import classes from './App.module.css'
import BurgerBuilder from "./containers/BurgerBuilder";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
 
export default App;
