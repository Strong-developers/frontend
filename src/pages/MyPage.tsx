import styled from "styled-components";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthCommonSidebar from "../components/auth/common/AuthCommonSidebar";

const MyPage = () => {
  return (
    <CommonBasePageComponent>
      <MyPageWrapper>
        <AuthCommonSidebar />
        <div>ㅎㅇㅎㅇ</div>
      </MyPageWrapper>
    </CommonBasePageComponent>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
`;

export default MyPage;
