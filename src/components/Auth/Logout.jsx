import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const Boton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: rgba(104, 85, 224, 1);
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: 1px solid rgba(104, 85, 224, 1);
  margin: 4rem;
`;
const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Boton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Boton>
  );
};

export default Logout;
