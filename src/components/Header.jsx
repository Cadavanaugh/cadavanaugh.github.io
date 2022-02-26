import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from '../AppStyle'

export class Header extends Component {
  render() {
    return (
      <StyledHeader>
          <img src="https://static.thenounproject.com/png/589410-200.png" alt="Science glass." />
          <h1>Cadavanaugh Devfolio</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </StyledHeader>
    )
  }
}

export default Header