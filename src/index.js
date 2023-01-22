import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { AuthContextProvider } from "./Context/Context";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider.consumer>
        <App/>
    </AuthContextProvider.consumer>
    
)
