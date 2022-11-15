import styled from "styled-components";
import Login from "./components/Auth/Login";
import Silhoutte from "./components/Silhoutte";
const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 720px) {
    margin-top: 10rem;
    width: 50%;
    margin-left: 5rem;
  }
`;
const Heading = styled.h1`
  padding: 1rem;
  margin: 1rem;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;
function App() {
  return (
    <Container>
      <Heading>Who's that Pokemon?</Heading>
      <Login />
      <Silhoutte />
    </Container>
  );
}

export default App;
