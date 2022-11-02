import styled from "styled-components";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthCommonSidebar from "../components/auth/common/AuthCommonSidebar";
// import AuthBookMarkShelter from "../components/auth/information/AuthBookMarkShelter";
import AuthVolunteerReservation from "../components/auth/information/AuthVolunteerReservation";

const MyPage = () => {
  return (
    <CommonBasePageComponent>
      <MyPageWrapper>
        <AuthCommonSidebar />
        {/* <AuthBookMarkShelter /> */}
        <AuthVolunteerReservation />
      </MyPageWrapper>
    </CommonBasePageComponent>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
`;

export default MyPage;
