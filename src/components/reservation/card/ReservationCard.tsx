import styled from "styled-components";
import ReservationCardLeft from "./ReservationCardLeft";
import ReservationCardRight from "./ReservationCardRight";
import Theme from "../../../util/theme";

const ReservationCard = () => {
  return (
    <ReservationCardContainer>
      <ReservationCardLeft />
      <ReservationCardRight />
    </ReservationCardContainer>
  );
};

const ReservationCardContainer = styled.div`
  width: 38rem;
  height: auto;
  display: flex;
  border: none;
  border-radius: 8px;
  background-color: ${Theme.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export default ReservationCard;
