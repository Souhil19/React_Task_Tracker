import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close':'Add'} color={showAdd ? 'red': 'green'} onClick= {onAdd}/>
      
    </header>
  )
}
//const headingStyle = {color : 'blue', backgroundColor :'black'}

Header.defaultProps = {title :'Task Tracker',}

Header.propTypes ={ title: PropTypes.string.isRequired,}

export default Header