import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { GlobalState } from "../../GlobalState";
import {  useContext } from "react";
import { Link } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const state = useContext(GlobalState);
  const [categories] = state.CategoryApi.categories
  const [isLogged] = state.userApi.isLogged;
  const [isUser] = state.userApi.isUser;

  
    
  const logoutUser = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  function Webname() {
    if (isLogged !== true) {
      return (
        <Link className="navbar-brand" to="/">
          Events Marketer
        </Link>
      );
    } else {
      return (
        <Link className="navbar-brand" to="/">
          User
        </Link>
      );
    }
  }

  const loggedRouter = () => {
    return (
      <Nav>
        <Link className="nav-link" to="/" onClick={logoutUser}>
          Logout
        </Link>
      </Nav>
    );
  };

  const UserRoute = () => {
    return (
      <Nav>
        <NavDropdown title="Management" id="basic-nav-dropdown">
          <NavDropdown.Item href="/management">My Panel</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  };

  const UserLogin = () => {
    if (isUser) {
      return UserRoute();
    }
  };

  return (

    <>
    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#595B83" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://codingyaar.com/wp-content/uploads/logo-1.png" alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    
    
    </>    
  );
};

export default Header;
