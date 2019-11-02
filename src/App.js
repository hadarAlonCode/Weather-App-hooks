import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Main from "./components/Main/Main"
import Favorites from "./components/Favorites"

@inject("CityStore")
@observer

class App extends Component {

  // componentDidMount(){
  //   this.props.CityStore.getLocation("tel aviv")
  // }

  componentDidMount() {
    this.props.CityStore.getDemiData()
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route path="/" exact render={() => <Main />} />

          <Route path="/favorites" exact render={() => <Favorites />} />
        </div>
      </Router>
    )
  }
}


export default App;
