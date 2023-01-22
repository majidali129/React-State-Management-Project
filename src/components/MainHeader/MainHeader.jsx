import React from 'react'
import classes from "./MainHeader.module.css"
import Navigation from './Navigation'

const MainHeader = (props) => {
  return (
    <header className={classes.main_header}>
    <h1 className={classes.logo}> State Management </h1>
    <Navigation authenticity={props.authenticity} onLogout={props.onLogout}/>
    </header>
  )
}

export default MainHeader