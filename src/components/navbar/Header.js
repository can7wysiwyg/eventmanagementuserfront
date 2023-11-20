import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { GlobalState } from "../../GlobalState";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
   <Navbar bg="dark" variant="dark" expand="lg">
      {Webname()}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/events">Trending Events</Nav.Link>
          <Nav.Link href="/new_events">New Events</Nav.Link>
          <Nav.Link href="/search_events">Search Events</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Event Types" id="basic-nav-dropdown">
              {categories?.map((category) => {
                return (
                  <NavDropdown.Item
                    href={`/event_cat/${category._id}`}
                    key={category._id}
                  >
                    {category.catName}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>

        </Nav>
        <Nav className="ml-auto">
        {isLogged ? loggedRouter() :   <Nav.Link href="/login">Login</Nav.Link> }
          {UserLogin()}

         
         </Nav>
      </Navbar.Collapse>
    </Navbar>

   
   </>    
        
  );
};

export default Header;
