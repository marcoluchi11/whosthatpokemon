import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import styled from "styled-components";
const Container = styled.div`
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
  }
`;
const LoginMenu = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <Container>
      <Profile />
      <Logout />
    </Container>
  ) : (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginMenu;
