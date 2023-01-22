import React from 'react'
import Card from "../UI/Card/Card"
import classes from "./Home.module.css"
import Button from '../UI/Button/Button'
import { useContext } from 'react'
import AuthenticityContext from '../../Context/Context'

const Home = () => {
  const AuthContext = useContext(AuthenticityContext)
  return (
    <Card className = {classes.home}>
        <h2 className={classes.feedback_message}> Welcome Back!!!</h2>
        <Button onClick={AuthContext.onLogout}>Home</Button>
    </Card>
  )
}

export default Home