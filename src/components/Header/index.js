import './header.css';
import { Link } from 'react-router-dom'


function Header(){
  return(
    <header>
      <Link className="logo" to="/">Indiies</Link>
      <Link className="login" to="/login">Login</Link>
    </header>
  )
}

export default Header;