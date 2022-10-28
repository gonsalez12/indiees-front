import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';


import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import CadastroUsuario from './pages/Login/CadastroUsuario';
import EsqueciSenha from './pages/Login/EsqueciSenha';
import AlterarSenha from './pages/Login/AlterarSenha';




const RoutesApp = () => (
    <BrowserRouter>
      <Header/>

      <Fragment>
        <Routes>
          <Route index  element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
          <Route path="/EsqueciSenha" element={<EsqueciSenha/>} />
          <Route path="/admin" element={ <Admin/>}   />
          <Route path="/AlterarSenha" element={ <AlterarSenha/>}  isPrivate />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Fragment> 
    </BrowserRouter>
);


export default RoutesApp;