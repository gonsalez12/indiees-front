import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';


import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import CadastroUsuario from './pages/CadastroUsuario';



const RoutesApp = () => (
    <BrowserRouter>
      <Header/>

      <Fragment>
        <Routes>
          <Route index  element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
          <Route path="/admin" element={ <Admin/>}  isPrivate />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Fragment> 
    </BrowserRouter>
);


export default RoutesApp;