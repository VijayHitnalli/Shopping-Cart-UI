import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'
import Home from './Component/Util/Public/Home'





const App = () => {
  
  return (
  
    <div>
    <Header/>
   
   <Outlet/>

    </div>
     
  )
}

export default App