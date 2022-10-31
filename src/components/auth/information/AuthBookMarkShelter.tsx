import styled from "styled-components";
import Theme from "../../../util/theme";
import ReservationCard from "../../reservation/card/ReservationCard";

const AuthBookMarkShelter = () => {
  return (
    <AuthBookMarkShelterContainer>
      <AuthBookMakrShelterTitle>BOOKMARK</AuthBookMakrShelterTitle>
      <AuthBookMarkCardWrapper>
        {Array.from({ length: 4 })
          .fill(0)
          .map((_, idx) => (
            <AuthBookMarkCardItemContainer key={idx}>
              <ReservationCard />
            </AuthBookMarkCardItemContainer>
          ))}
      </AuthBookMarkCardWrapper>
    </AuthBookMarkShelterContainer>
  );
};

const AuthBookMarkShelterContainer = styled.div`
  width: 100%;
`;

const AuthBookMakrShelterTitle = styled.p`
  width: auto;
  text-align: center;
  font-size: ${Theme.fontSize.big};
`;

const AuthBookMarkCardWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const AuthBookMarkCardItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default AuthBookMarkShelter;
