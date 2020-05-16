import React, { useContext } from 'react'
import { themeContext } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

function Nav({ toggleTheme }) {
  const theme = useContext(themeContext);
  console.log("RE_RENDER NAV");
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            className='nav-link'>
            Popular
              </NavLink>
        </li>
        <li>
          <NavLink
            to='/battle'
            activeStyle={activeStyle}
            className='nav-link'>
            Battle
              </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className='btn-clear'
        onClick={() => toggleTheme()}
      >
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </nav>
  )
}

export default React.memo(Nav);