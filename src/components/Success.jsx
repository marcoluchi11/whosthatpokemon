import styled from "styled-components";

const Container = styled.div`
  background-color: #4bb543;
  border-radius: 5px;
  margin: 1rem 0;
  p {
    color: #fff;
    text-align: center;
    padding: 0 2rem;
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
