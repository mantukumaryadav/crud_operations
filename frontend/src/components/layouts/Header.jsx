import { Container, Nav, Navbar } from "react-bootstrap";
import { MdCategory, MdProductionQuantityLimits } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>CRUD OPERATIONS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <>
                <LinkContainer to="/products">
                  <Nav.Link>
                    <MdProductionQuantityLimits /> Product Master
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/categories">
                  <Nav.Link>
                    <MdCategory />
                    Categories
                  </Nav.Link>
                </LinkContainer>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
