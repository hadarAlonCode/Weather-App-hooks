import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Main from "./components/Main/Main"
import Favorites from "./components/Favorites"


@inject("CityStore", "HeaderStore")
@observer

class App extends Component {

  componentDidMount() {
    this.props.CityStore.getDemiData()
    this.props.HeaderStore.checkLocalStorage()
  }

//   componentDidMount=()=>{
//     this.props.CityStore.getLocation()
    
// }


  render() {
    return (
      <Router>
        <div className={this.props.HeaderStore.isLight ? "light_mode" : "dark_mode" }>
          <Header />

          <Route path="/" exact render={() => <Main />} />

          <Route path="/favorites" exact render={() => <Favorites />} />
        </div>
      </Router>
    )
  }
}


export default App;
