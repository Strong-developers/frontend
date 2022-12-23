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
  width: 100%;
`;
