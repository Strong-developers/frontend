import styled from "styled-components";
import UserReservationNoticeHeader from "./UserReservationNoticeHeader";
import UserReservationNoticeBody from "./UserReservationNoticeBody";

const UserReservationNotice = () => {
  return (
    <UserReservationNoticeContainer>
      <UserReservationNoticeHeader />
      <UserReservationNoticeBody />
    </UserReservationNoticeContainer>
  );
};

export default UserReservationNotice;

const UserReservationNoticeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50rem;
  padding: 3rem;
  box-sizing: border-box;
`;
