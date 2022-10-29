import styled from "styled-components";
import { CommonInput } from "../../../assets/styles/commonStyle";

const ReservationSearch = () => {
  return (
    <ReservationSearchContainer>
      <ReservationSearchInput placeholder="검색 키워드를 입력해 주세요" />
    </ReservationSearchContainer>
  );
};

const ReservationSearchContainer = styled.div`
  width: 30rem;
`;

const ReservationSearchInput = styled(CommonInput)`
  width: 100%;
  height: 3rem;
`;

export default ReservationSearch;
