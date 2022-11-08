import styled from "styled-components";

const Container = styled.div`
  background-color: #ed4337;
  border-radius: 5px;
  margin: 1rem 0;
  max-width: 15rem;
  p {
    color: #fff;
    text-align: center;
    padding: 0.3rem 1rem;
  }
  @media (min-width: 720px) {
    max-width: inherit;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;
const Error = ({ message }) => {
  return (
    <Container className="appearence">
      <p>{message}</p>
    </Container>
  );
};

export default Error;
