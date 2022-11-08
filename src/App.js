import styled from "styled-components";
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
`;
function App() {
  return (
    <Container>
      <Heading>Who's that Pokemon?</Heading>
      <Silhoutte />
    </Container>
  );
}

export default App;
