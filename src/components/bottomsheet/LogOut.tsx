import styled from 'styled-components';
import { useLogOutModal } from '@/store/useModalStore';
import { BottomSheetContainer } from '../meeting/result/AttendStatusHeader';
import BottomSheetHeader from './BottomSheetHeader';
import Button from '../common/Button';

function LogOut() {
  const closeLogOut = useLogOutModal((state) => state.close);
  return (
    <Container>
      <BottomSheetHeader title="로그아웃 하시겠습니까?" onClick={closeLogOut} />
      <ButtonContainer>
        <Button $style="solid" $theme="primary">
          로그아웃
        </Button>
        <Button $style="solid" $theme="neutral" onClick={closeLogOut}>
          취소
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled(BottomSheetContainer)`
  height: 30%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default LogOut;
