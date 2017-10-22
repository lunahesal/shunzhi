import React, { Component } from 'react'
import './app.css'
import Home from '../../components/Home/Home'
import News from '../../components/News/News'
import AlertBox from '../../components/AlertBox/AlertBox'
import LayoutContainer from '../LayoutContainer'
import CartButtonContainer from '../CartButtonContainer'
import axios from 'axios'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
 } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
            <AlertBox />
            <Router>
              <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/news' render={() => {
                      if (!localStorage.getItem('userId')) {
                        return <Redirect to='/' />
                      } else {
                        return <News />
                      }
                    }} />
                    <Route component={LayoutContainer} />
                  </Switch>
                  <CartButtonContainer />
              </div>
            </Router>
        </div>
      </Provider>

    )
  }
}

export default App
