import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import styled from "styled-components";
import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";
const Container = styled.div`
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
  }
`;
const LoginMenu = () => {
  const { isAuthenticated } = useAuth0();
  const { points } = useContext(PokeContext);
  return isAuthenticated ? (
    <Container>
      <Profile />
      <Logout />
      <h1>Points: {points}</h1>
    </Container>
  ) : (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginMenu;
