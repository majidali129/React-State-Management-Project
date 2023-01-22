import React from "react";
import { useState } from "react";

const AuthenticityContext = React.createContext();


export const AuthContextProvider = (props)=>{
    

    const [isLoginValid , setIsLoginValid] = useState(false)
    


    const LoginHandler = (email , password)=>{
        setIsLoginValid(true)
    }

    const LogoutHandler = ()=>{
        setIsLoginValid(false)
    }
    return (
        <AuthenticityContext.Provider value={
            {
                onLogout : LogoutHandler,
                onLogin : LoginHandler,
                isLoginValid : isLoginValid
            }
        }>
            {props.children}
        </AuthenticityContext.Provider>
    )
}

    export default AuthenticityContext