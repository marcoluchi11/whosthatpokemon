import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Boton = styled.button`
  cursor: pointer;
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);
  padding: 0.5rem 2rem;
  border-radius: 5px;
  outline: 0;
  margin: 4rem;
`;
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Boton onClick={() => loginWithRedirect()}>Login</Boton>
    </div>
  );
};

export default Login;
