import React,{Fragment , useState} from 'react'
import Login from './components/Form/Login'


function App() {
  // const [isValid , setIsValid] = useState(true)
  
  const LoginDataHandler = ( email , password)=>{
    console.log(email , password)
    // setIsValid(true)
  }

  return (
    <Fragment>
       < Login userData={LoginDataHandler}/>
    </Fragment>
  )
}

export default App