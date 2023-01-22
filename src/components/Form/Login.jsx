

import React , {useState , useEffect , useReducer } from 'react'
import Card from '../UI/Card/Card'
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import { useContext } from 'react'
import { AuthContextProvider } from '../../Context/Context'

const EmailReducer = (currentState , actions )=>{
  if(actions.type === "userEmail"){
    return ({value : actions.value , isValid : actions.value.includes("@")})
  }
  return({ value : "" , isValid : false})
}

const PasswordReducer = (currentState , actions )=>{
  if(actions.type === "userPassword"){
    return ({value : actions.value , isValid : actions.value.trim().length > 4})
  }
  return({ value : "" , isValid : false})
}

const Login = (props)=>{


  // const [firstName , setFirstName ] = useState("");
  // const [lastName , setLastName ] = useState("");
  // const [email , setEmail ] = useState("");
  // const [password , setPassword ] = useState("");
  // const [validEmail , setValidEmail] = useState()
  // const [validPassword , setValidPassword] = useState()
  const [formIsValid , setFormIsValid] = useState(false)

  const AuthContext = useContext(AuthContextProvider);

  // const FirstNameChangeHandler = (event)=>{
  //   setFirstName(event.target.value)
  // }
  // const LastNameChangeHandler = (event)=>{
  //   setLastName(event.target.value)
  // }


  const [userEmail , emailDispatcher] = useReducer(EmailReducer , {
    value : "",
    isValid : null
  })

  const [userPassword , passwordDispatcher] = useReducer(PasswordReducer , {
    value : "",
    isValid : null
  })


  const {isValid : emailIsValid} = userEmail
  const {isValid : passwordIsValid} = userPassword

  useEffect(()=>{
    const validityIdentifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    }, 500);
    return ()=>{
      clearTimeout(validityIdentifier)
    }
  },[emailIsValid , passwordIsValid])

  const EmailChangeHandler = (event)=>{
    // setEmail(event.target.value)
    // setFormIsValid(event.target.value.includes("@") && password.trim().length > 4)
    emailDispatcher({type:"userEmail" , value : event.target.value})
  }
  const PasswordChangeHandler = (event)=>{
    // setPassword(event.target.value);
    // setFormIsValid(email.includes("@") && event.target.value.trim().length > 4)
    passwordDispatcher({type : "userPassword" , value : event.target.value})

  }

  // const EmailValidityHandler = ()=>{
  //   setValidEmail(userEmail.value.includes('@'));
  // }
  // const PasswordValidityHandler = ()=>{
  //   setValidPassword(userPassword.value.trim().length > 4);
  // }
  
  const LoginHandler = (event)=>{
    event.preventDefault()
    props.userData(userEmail.value , userPassword.value)
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

        <div className={`${classes.control} ${userEmail.isValid === false ? classes.inValid : ""}`}>
           <label htmlFor="email">Email :</label>      
          <input 
          value={userEmail.value}
          type="text" 
          id='email' 
          onChange={EmailChangeHandler}
          // onBlur={EmailValidityHandler}
          />
        </div>

        <div className={`${classes.control} ${userPassword.isValid === false ? classes.inValid : ""}`}>
           <label htmlFor="password">Password :</label>      
          <input 
          value={userPassword.value}
          type="text" 
          id='password' 
          onChange={PasswordChangeHandler} 
          // onBlur={PasswordValidityHandler}
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