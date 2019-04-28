import React, { Component } from 'react'
import axios from 'axios'

class Demande extends Component {
  constructor () {
    super()
    this.state = {
        detail: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://api.github.com/users/cyberhafid')
      .then(response => this.setState({detail: response.data}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me for profil Cyberhafid</button>
        <p>login :{this.state.detail.login}</p>
        <p>id :{this.state.detail.id}</p>
        <p>url :{this.state.detail.url}</p>
        <p>create at :{this.state.detail.created_at}</p>
       
      </div>
    )
  }
}
export default Demande