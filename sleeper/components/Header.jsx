import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {StyledHeader} from './styles'

export class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Link to='/projects'>
          <img src="https://icons-for-free.com/iconfiles/png/512/arrow+back+48px-131987942797578999.png" alt="Go back." />
        </Link>
        <h1>😴 Sleeper 💤</h1>
      </StyledHeader>
    )
  }
}

export default Header