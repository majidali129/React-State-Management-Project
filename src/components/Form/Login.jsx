

import React , {useState , useEffect} from 'react'
import Card from '../UI/Card/Card'
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"

const Login = (props)=>{

  // const [firstName , setFirstName ] = useState("");
  // const [lastName , setLastName ] = useState("");
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");
  const [validEmail , setValidEmail] = useState()
  const [validPassword , setValidPassword] = useState()
  const [formIsValid , setFormIsValid] = useState(false)

  // const FirstNameChangeHandler = (event)=>{
  //   setFirstName(event.target.value)
  // }
  // const LastNameChangeHandler = (event)=>{
  //   setLastName(event.target.value)
  // }

  useEffect(()=>{
    const validityIdentifier = setTimeout(() => {
      setFormIsValid(
        email.includes("@") && password.trim().length > 4
      )
    }, 500);
    return ()=>{
      clearTimeout(validityIdentifier)
    }
  },[email , password])
  const EmailChangeHandler = (event)=>{
    setEmail(event.target.value)
    // setFormIsValid(event.target.value.includes("@") && password.trim().length > 4)
  }
  const PasswordChangeHandler = (event)=>{
    setPassword(event.target.value);
    // setFormIsValid(email.includes("@") && event.target.value.trim().length > 4)
  }

  const EmailValidityHandler = ()=>{
    setValidEmail(email.includes('@'));
  }
  const PasswordValidityHandler = ()=>{
    setValidPassword(password.trim().length > 4);
  }
  
  const LoginHandler = (event)=>{
    event.preventDefault()
    props.userData(email , password)
    // console.log(firstName , lastName , email , password)

  }


  return (
    <Card className = {classes.login}>
      <form onSubmit={LoginHandler}>

        {/* <div className={classes.control}>
           <label htmlFor="firstName">First Name  :</label>      
          <input 
          type="text" 
          id='firstName' 
          onChange={FirstNameChangeHandler} 
          value={firstName}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="lastName">Last Name :</label>      
          <input
          value={lastName} 
          type="text" 
          id='lastName' 
          onChange={LastNameChangeHandler} 
          />
        </div> */}

        <div className={`${classes.control} ${validEmail === false ? classes.inValid : ""}`}>
           <label htmlFor="email">Email :</label>      
          <input 
          value={email}
          type="text" 
          id='email' 
          onChange={EmailChangeHandler}
          onBlur={EmailValidityHandler}
          />
        </div>

        <div className={`${classes.control} ${validPassword === false ? classes.inValid : ""}`}>
           <label htmlFor="password">Password :</label>      
          <input 
          value={password}
          type="text" 
          id='password' 
          onChange={PasswordChangeHandler} 
          onBlur={PasswordValidityHandler}
          />
        </div>

        <div className={classes.btn_container}>

        <Button
        type="submit" 
        className={classes.submit_btn}
        disabled={!formIsValid}
        > Login</Button>
        </div>

      </form>
    </Card>
  )
}

export default Login