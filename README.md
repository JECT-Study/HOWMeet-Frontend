# HowMeet

## 프로젝트 동기

### 1.1 기획 배경

- 회의나 모임 시간을 맞추는 것은 특히 바쁜 일정 속에서 어렵고 번거로운 작업임
- 여러 사람의 일정을 효율적으로 조율할 수 있는 서비스의 필요성을 느낌

### 1.2 컨셉

- 각 사용자가 가능한 일정을 입력하면, 교집합 시간을 자동으로 계산해 히트맵으로 시각화하는 서비스
- 일정 조율 페이지와 결과 페이지를 링크로 공유할 수 있는 기능 제공
- 회원 서비스로, 다회성으로 일정을 조율할 수 있는 ‘방’ 기능과 알림 기능 제공

### 1.3 타겟

- 회의, 모임 등을 자주 갖는 직장인, 학생 등
- 여러 사람의 일정을 맞춰야 하는 상황이 빈번한 사용자

### 1.4 기대 효과

- 사용자들이 더 빠르고 간편하게 모임 일정을 조율할 수 있음
- 교집합 시간을 한눈에 확인할 수 있어 일정 조율 효율성 증대
- 팀원들의 가능한 시간대를 토대로 모임시간을 방장이 확정하도록 하여 자율성 확보

## 팀 소개

### 프론트엔드

**팀 소개**

|        |                             |                              |                              |
| ------ | --------------------------- | ---------------------------- | ---------------------------- |
| 이름   | 고세종                      | 권오영                       | 류지민                       |
| 역할   | FE-Lead                     | FE                           | FE                           |
| 기능   | 방 CRUD 일정 생성           | 일정 조율 / 브라우저 조율    | 로그인 / PWA / 알림          |
| GitHub | https://github.com/SebellKo | https://github.com/oyeong011 | https://github.com/JIMIN1020 |

## 시작 가이드

### 배포 주소

- https://www.howmeet.site/

### 프로젝트 정보

- 개발 기간 : 2024.07 ~ 2024.10

## 파일 구조

public
└─ assets
├─ icons
└─ images
src
├─ apis // api 요청, 인스턴스...
├─ components
├── common // button, input, nav, footer...
└── home // 페이지별 컴포넌트
├─ pages // 페이지
├─ models // req, res model
├─ layouts // 레이아웃
├─ constants // 상수
├─ store // 상태 관리 스토어
├─ mocks
├─ styles // 전역 스타일링, theme
├─ types
├─ utils // 유틸리티 함수 (자주 사용되는 기능 모듈화)
├─ hooks // 커스텀 훅
├─ routes
├─ App.tsx
└─ index.tsx

## 주요 기능

![1](https://github.com/user-attachments/assets/1d5694e3-cb67-405a-88d6-c0445c0dfcca)
![2](https://github.com/user-attachments/assets/b5364401-7cfa-43a6-b8f1-ba4a5b846970)
![3](https://github.com/user-attachments/assets/f1b77a3e-2c16-4cef-b385-0cd5d38ae887)
![4](https://github.com/user-attachments/assets/18daacc4-16df-4b3a-863b-96b76451c2cd)
![5](https://github.com/user-attachments/assets/ff03f125-b878-4471-809c-b195c5382ce0)
![6](https://github.com/user-attachments/assets/f9595695-39e6-45fc-81f8-69c2bfd1d845)
![7](https://github.com/user-attachments/assets/90ec13f7-a45d-45d3-a913-be5f90a6f739)
![8](https://github.com/user-attachments/assets/f724719b-577e-4c86-b24c-71b51342a864)
![9](https://github.com/user-attachments/assets/42481a4f-1898-4a1b-bf65-c4c45901c838)
![10](https://github.com/user-attachments/assets/c6de335b-6d4e-4908-a2ce-9eed8bfcb084)
![11](https://github.com/user-attachments/assets/37528d65-b938-41a8-8d4f-9fd5355bd52c)
![12](https://github.com/user-attachments/assets/b0b97c75-9b92-4dd4-914e-c0e2b036f526)
![13](https://github.com/user-attachments/assets/9cfdb74b-cf60-4b97-977b-c5bf5ee763a0)
![14](https://github.com/user-attachments/assets/14d81c55-29cf-4374-955a-6637e6a43f70)
![15](https://github.com/user-attachments/assets/0304528d-d33a-4279-a73f-b97f9c654f85)
![16](https://github.com/user-attachments/assets/2d5db347-45ad-4755-8920-5d0f0b5def11)
![17](https://github.com/user-attachments/assets/b2d32c7a-6a51-4545-b3a7-ee7f1b879910)
![18](https://github.com/user-attachments/assets/c19176fe-d6a4-4501-bd33-ca838dfd85f6)
![19](https://github.com/user-attachments/assets/04e13466-ab2d-443b-81f9-52006bfee240)

## 트러블 슈팅
