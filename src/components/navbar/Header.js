import { GlobalState } from "../../GlobalState";
import {  useContext } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Logo from "../images/logo.png"

const Header = () => {
  const state = useContext(GlobalState);
  // const [categories] = state.CategoryApi.categories
  const [isLogged] = state.userApi.isLogged;
  const [isUser] = state.userApi.isUser;

  
    
  const logoutUser = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  
 
  const UserRoute = () => {
    return (
      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/management">My Panel</a>
        </li>

      
      
    );
  };



  const UserLogin = () => {
    if (isUser) {
      return UserRoute();
    }
  };

  const loggedRouter = () => {
    return (
    
        <li className="nav-item">
        <a className="nav-link"href="/" onClick={logoutUser}>
          Logout
        </a>
        </li>
    
    );
  };


  return (

    <>
    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#595B83" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="logo" />
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
          <a className="nav-link" href="/events">Trending Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new_events">New Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/browse_events">Browse Event Types</a>
        </li>
        
        

        
{isLogged ? loggedRouter() :  <li className="nav-item">  <a href="/login" className="nav-link" >Login</a> </li> }
          {UserLogin()}


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
