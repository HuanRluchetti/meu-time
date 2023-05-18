import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from "react-router-dom";

import {InitScreen} from "./screens"

function App() {

  return (
    <div>
      <div className='container'>
        <Outlet/>
      </div>
    </div>
    

  )
}

export default App
