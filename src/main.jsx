import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import navs from './Component/Util/Routes/Navigation.jsx';
import Home from './Component/Util/Public/Home.jsx';

const user = {
  username: "",
  role: "CUSTOMER",
  isAuthenticated: false
}

const {role,isAuthenticated}= user;

const allRoutes=()=>{
    return(
        <Route path="/" element={<App />}>
      {navs.map((nav,i)=>{
        
        if(isAuthenticated){
            if(nav.isVisibleAfterAuth){
                if(nav.role ===role || nav.role==="All"){
                    console.log(nav)
                return <Route key={i} path={nav.path} element={nav.element}/>
                }
            }
        }else{
            if(!nav.requireAuth && nav.role==="ALL"){
                console.log(nav)
                return <Route key={i} path={nav.path} element={nav.element}/>
            }
        }
      })}
        </Route>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    {allRoutes()}
    </Routes>
  </BrowserRouter>
);
