import React, { Fragment } from 'react'
import classes from "./Input.module.css"

const Input = (props) => {
  return (
    <Fragment>
        
        <div className={`${classes.control} ${props.isValid === false ? classes.inValid : ""}`}>
           <label htmlFor={props.id}>{props.label}</label>
          <input 
          value={props.value}
          type={props.type} 
          id={props.id} 
          onChange={props.onChange}
          // onBlur={EmailValidityHandler}
          />
          </div>
    </Fragment>
  )
}

export default Input