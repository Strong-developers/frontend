import styled from "styled-components";
import Theme from "../../../util/theme";

const ReservationAuthDetail = () => {
  return (
    <DetailWrapper>
      <DetailImageContainer>
        <DetailIamge src="../../../src/assets/images/logo-bg.png" />
      </DetailImageContainer>
      <DetailTitleContainer>
        <DetailTitle>Shelter name</DetailTitle>
        <DetailDescriptionContainer>
          <DetailDescriptionText>예약일자 2022-11-02</DetailDescriptionText>
          <DetailDescriptionText>예약시간 19:36</DetailDescriptionText>
          <DetailDescriptionText>인원 성인 2명</DetailDescriptionText>
        </DetailDescriptionContainer>
      </DetailTitleContainer>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const DetailImageContainer = styled.div`
  width: auto;
`;

const DetailIamge = styled.img`
  width: 300px;
`;

const DetailTitleContainer = styled.div`
  width: 100%;
`;

const DetailTitle = styled.p`
  font-size: ${Theme.fontSize.littleMoreBigger};
  font-weight: ${Theme.fontWeight.bold};
`;

const DetailDescriptionContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const DetailDescriptionText = styled.p`
  font-size: ${Theme.fontSize.default};
`;

export default ReservationAuthDetail;
