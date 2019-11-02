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

  constructor(){
    super()
    this.state = {
      mood: "light_mood"
    }
  }
  // componentDidMount(){
  //   this.props.CityStore.getLocation("tel aviv")
  // }

  componentDidMount() {
    this.props.CityStore.getDemiData()
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  mood=(mood)=>{
    if(this.state.mood == "light_mood"){
      this.setState({
        mood: "dark_mood"
      })
    }else{
      this.setState({
        mood: "light_mood"
      })
    }
  }

  render() {
    return (
      <Router>
        <div className={this.state.mood}>
          <Header />
          <button onClick={this.mood}>light\dark mood</button>


          <Route path="/" exact render={() => <Main />} />

          <Route path="/favorites" exact render={() => <Favorites />} />
        </div>
      </Router>
    )
  }
}


export default App;
