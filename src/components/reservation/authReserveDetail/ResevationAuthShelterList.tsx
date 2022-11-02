import styled from "styled-components";
import Theme from "../../../util/theme";

const ReservationAuthShelterList = () => {
  return (
    <ShelterContainer>
      <ShelterTabWrapper>
        <ShelterTab>예약 상황</ShelterTab>
        <ShelterTab>지난 내역</ShelterTab>
      </ShelterTabWrapper>
      <ShelterListWrapper>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ShelterListContent key={idx}>
            2022-12-24 보호소 이름
          </ShelterListContent>
        ))}
      </ShelterListWrapper>
    </ShelterContainer>
  );
};

const ShelterContainer = styled.div`
  width: 100%;
`;

const ShelterTabWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const ShelterTab = styled.div`
  cursor: pointer;
  font-size: ${Theme.fontSize.littleMoreBig};
  border-bottom: 2px solid ${Theme.colors.black};
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ShelterListWrapper = styled.div`
  width: 80%;
`;

const ShelterListContent = styled.p`
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.01);
  }
`;

export default ReservationAuthShelterList;
