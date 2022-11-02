import styled from "styled-components";

export const Container = styled.div`
  background-color: #4bb543;
  border-radius: 5px;
  margin: 1rem 0;
  max-width: 15rem;
  p {
    color: #fff;
    text-align: center;
    padding: 0 1rem;
  }
  @media (min-width: 720px) {
    max-width: inherit;
  }
`;
const Success = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Success;
