import {
  Navbar,
  Container,
  Nav,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`;

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto my-1">
          <Image
            className="me-2"
            src="https://avatars.githubusercontent.com/u/80891249?v=4"
            roundedCircle
            height={30}
          />
          <InputGroup>
            <Form.Control
              size="sm"
              type="text"
              placeholder="username"
              className="bg-transparent text-white border-0 border-bottom"
            />
            <SearchButton type="submit">
              <BsSearch color="white" size={18} />
            </SearchButton>
          </InputGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
