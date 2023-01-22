import React,{useContext , Fragment} from 'react'
import AuthenticityContext from '../../Context/Context'
import classes from "./Navigation.module.css"

const Navigation = () => {
  const validity = useContext(AuthenticityContext)
  return (
          // <AuthenticityContext.Consumer>
          <Fragment>
           <nav>
            <ul>
              {
              validity.isLoginValid && 
              <li><a href="#">Home</a></li>
              }

              {
              validity.isLoginValid && 
              <li><a href="#">About</a></li>
              }

              {
              validity.isLoginValid && 
              <button className={classes.home_btn} id="home_btn" onClick={validity.onLogout}>Home</button>
              }
              </ul>
          </nav>

          </Fragment>
    // </AuthenticityContext.Consumer>
  )
}

export default Navigation