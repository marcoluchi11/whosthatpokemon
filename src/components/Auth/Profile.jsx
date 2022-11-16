import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <Container>
        <img src={user.picture} alt={user.name} />
      </Container>
    )
  );
};

export default Profile;
