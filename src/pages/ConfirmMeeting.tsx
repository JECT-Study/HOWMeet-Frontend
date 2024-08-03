import {
  ContentContainer,
  FlexColContainer,
} from '@/styles/components/container';
import { PageTitle, SubTitle } from '@/styles/components/text';
import styled from 'styled-components';
import ShareIcon from 'public/assets/icons/common/share.svg';
import Button from '@/components/common/Button';

import { SUB_TITLE, TITLE } from '@/constants/title';
import ConfirmContent from '@/components/room/ConfirmContent';

function ConfirmMeeting() {
  return (
    <FlexColContainer>
      <ContentContainer>
        <HeaderWrapper>
          <PageTitle>{TITLE.confirmMeeting}</PageTitle>
          <img src={ShareIcon} alt="share" />
        </HeaderWrapper>
        <SubTitle>{SUB_TITLE.newMeeting}</SubTitle>
        <ConfirmContent />
      </ContentContainer>
      <ButtonContainer>
        <Button $style="solid" disabled>
          수정하기
        </Button>
        <Button $style="solid">일정 생성</Button>
      </ButtonContainer>
    </FlexColContainer>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-top: 20px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  position: sticky;
  bottom: 16px;
  width: 100%;
  padding: 0 24px;
`;

export default ConfirmMeeting;