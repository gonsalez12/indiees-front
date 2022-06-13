import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, Outlet, Navigate} from "react-router-dom";
import Header from './components/Header';

import { isAuthenticated } from "./services/auth";

import Home from './pages/Home';
import Login from './pages/Login';
import Teste from "./pages/Teste";

function PrivateOutlet() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}


const RoutesApp = () => (
    <BrowserRouter>
      <Header/>

      <Fragment>
        <Routes>
          <Route index  element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          
          <Route path="/teste" element={<PrivateOutlet />} >
            <Route element={<Teste/>}/> 
          </Route>

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Fragment> 
    </BrowserRouter>
);


export default RoutesApp;