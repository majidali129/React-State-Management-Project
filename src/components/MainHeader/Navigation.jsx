import React,{useContext , Fragment} from 'react'
import { AuthContextProvider } from '../../Context/Context'
import classes from "./Navigation.module.css"

const Navigation = () => {
  const validity = useContext(AuthContextProvider)
  return (
          // <AuthenticityContext.Consumer>
          <Fragment>
           <nav>
            <ul>
              {
              validity.loginValid && 
              <li><a href="#">Home</a></li>
              }

              {
              validity.loginValid && 
              <li><a href="#">About</a></li>
              }

              {
              validity.loginValid && 
              <button className={classes.home_btn} id="home_btn" onClick={validity.onLogout}>Home</button>
              }
              </ul>
          </nav>

          </Fragment>
    // </AuthenticityContext.Consumer>
  )
}

export default Navigation