import React, { StrictMode } from 'react'
import ReactDOM  from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from "./App.js"


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
    <App/>
    </StrictMode>)


// ReactDOM.render(
//     <StrictMode>
//     <App/>
//     </StrictMode>,document.getElementById('root'))