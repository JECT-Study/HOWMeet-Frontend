import styled from 'styled-components';
import Button from '@/components/common/Button';
import { TimeSlot } from '@/types/timeTableTypes';
import { CloseIcon } from 'public/assets/icons';

import theme from '@/styles/theme';
import {
  CloseButton,
  ModalContainer,
  ModalContentContainer,
  ModalHeader,
  ModalOverlay,
} from '../select/TimeSelectCompModal';

function ResultTimeSelectModal({
  handleModalClose,
  decidedTime,
}: {
  handleModalClose: () => void;
  decidedTime: TimeSlot[];
}) {
  const decidedDate = decidedTime[0].date;
  const startHour = decidedTime[0].hour;
  const startMinute = decidedTime[0].minute;
  const endHour = decidedTime[decidedTime.length - 1].hour;
  const endMinute = decidedTime[decidedTime.length - 1].minute;
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <CloseButton onClick={handleModalClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalContentContainer>
          <ModalTitle>일정을 확정하시겠습니까?</ModalTitle>
          <ModalContent>일정 확정 후 시간 변경은 어려워요!</ModalContent>
          <ModalRoomTitleAndCont>
            하우밋 방
            <GrayColLine />
            개발자 전체 회의 일정
          </ModalRoomTitleAndCont>
        </ModalContentContainer>
        <ModalDecisionTime>
          {decidedDate} {startHour}:{startMinute} ~ {endHour}:{endMinute}
        </ModalDecisionTime>
        <ButtonContainer>
          <Button $style="outlined" onClick={handleModalClose}>
            취소
          </Button>
          <Button $style="solid" onClick={handleModalClose}>
            확인
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ResultTimeSelectModal;

const GrayColLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${theme.color.primary.black};
  margin: 0 10px;
`;

const ModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const ModalRoomTitleAndCont = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
`;

const ModalDecisionTime = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${theme.color.point.green};
  margin-top: 10px;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding-top: 20px;
`;