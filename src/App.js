import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from "./components/Main/Main"
import Favorites from "./components/Favorites/Favorites"

const App = inject("CityStore", "HeaderStore")(observer(function (props) {

  useEffect(() => {
    let CityStore = props.CityStore
    if (CityStore.isFirstLogin) {
      CityStore.geoLocation()
      props.HeaderStore.checkLocalStorage()
    }
  }, [])

  return (
    <Router>
      <div className={props.HeaderStore.isLight ? "light_mode" : "dark_mode"}>
        <Header />
        <Route path="/" exact render={() => <Main />} />
        <Route path="/favorites" exact render={() => <Favorites />} />
      </div>
    </Router>
  )
}));

export default App;
