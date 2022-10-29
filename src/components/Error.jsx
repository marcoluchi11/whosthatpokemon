import styled from "styled-components";

const Container = styled.div`
  background-color: #ed4337;
  border-radius: 5px;
  margin: 1rem 0;
  p {
    color: #000;
    padding: 0 2rem;
  }
`;
const Error = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Error;
