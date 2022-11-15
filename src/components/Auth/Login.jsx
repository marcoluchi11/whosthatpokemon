import styled from "styled-components";

const Boton = styled.button`
  background-color: #fff;
  cursor: pointer;
  color: #000;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 4rem;
  outline: 0;
  border: 1px solid #000;
`;
const Login = () => {
  return (
    <div>
      <Boton>Login</Boton>
    </div>
  );
};

export default Login;
