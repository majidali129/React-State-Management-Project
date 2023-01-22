import React,{ Fragment, useContext} from 'react'
import Login from './components/Form/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import  AuthenticityContext from './Context/Context'


function App() {
  

  const authContex = useContext(AuthenticityContext)

 

  return (
    <Fragment>
      <MainHeader />
      <main>
      { authContex.isLoginValid && <Home />}

       { !authContex.isLoginValid && < Login  /> } 
      </main>
      </Fragment>
  )
}

export default App