import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import {Avatar} from 'antd'
import avatar from './img/avatar.jpg'

const Header = ({data}) => {
  const {name, career} = data

  return (
    <div className='header'>
      <div className='cover'>
        <div className='cover-overlay'/>
        <Avatar className='avatar' size={200} src={avatar} shape='square'/>
        <div className='name'><b>{name.first}</b> {name.last}</div>
        <div className='career'>{career}</div>
      </div>
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.object.isRequired
}

export default Header
