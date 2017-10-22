import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart/Cart'
import store from '../redux/store'
import axios from 'axios'
import {
  withRouter
} from 'react-router-dom'

class CartContainer extends Component {
  checkout = (dishes) => {
    dishes.map(t =>(
      this.props.dispatch({type:'DELETE_DISHES'})
    ))
    this.props.dispatch({ type: 'SHOW_ALERT', msg: '欢迎继续购物' })
    this.props.history.push('/news')
  }
  render() {
    const { dishes } = this.props
    if (dishes) {
      return(
        <Cart dishes={dishes}
          onCheckout={() => this.checkout(dishes)}/>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    dishes: state.cart.dishes
  })
}

export default connect(mapStateToProps)(CartContainer)
