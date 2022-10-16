import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';


import Home from './pages/Home';
import Login from './pages/Login';
import Teste from './pages/Teste';  


const RoutesApp = () => (
    <BrowserRouter>
      <Header/>

      <Fragment>
        <Routes>
          <Route index  element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/teste" element={ <Teste/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Fragment> 
    </BrowserRouter>
);


export default RoutesApp;