import { Project } from '../../types/portfolio';

export const contactlessCredentialTerminal: Project = {
  title: '비접촉 카드·모바일카드 인증 단말 개발',
  type: 'project',
  description:
    'ISO14443A/B 실물카드와 NFC/BLE 모바일카드를 지원하는 카드리더를 개발하고, Tmoney/Ezl 기반 출입 인증 흐름을 단말에 적용했습니다.',
  techStack: [
    'C',
    'STM32',
    'ISO14443A/B',
    'NFC',
    'BLE',
    'ISO7816',
    'SAM',
    'SPI',
  ],
  duration: '2022.01 - 현재',
  image: '/images/WorkProject/비접촉 카드·모바일카드 인증 단말 개발/S1AccessControl.jpg',
  content: `### 개요
출입 단말에서 **실물 비접촉 카드와 모바일카드(NFC/BLE)** 를 함께 처리할 수 있도록 카드리더 펌웨어와 인증 사양을 개발했습니다.

**Tmoney, Ezl 실물카드/모바일카드**, 고객사 전용 모바일카드, Apple Pay 계열 Applet 적용 경험을 바탕으로 **카드 인식, Applet 처리, 단말 인증 흐름** 을 구현했습니다.

## 내가 맡은 역할
- ISO14443A/B 카드 및 NFC/BLE 모바일카드 리딩 카드리더 개발
- 모바일카드 인증 사양 설계 및 고객 환경별 커스터마이징
- ISO7816 SAM 기반 인증 처리 및 암복호화 로직 구현
- Ezl/Tmoney 실물카드 및 모바일카드 출입 시스템 적용 개발
- 카드 인식 실패, 재시도, 예외 응답에 대한 현장 안정화 대응

## 기술 포인트
- **ISO14443A/B** 비접촉 카드 처리
- **NFC/BLE 모바일카드** 인증 흐름 설계
- **ISO7816 SAM** 연동 및 보안 처리
- **SPI 기반 RFID/NFC Chip 제어** 경험
- 교통카드/모바일카드/사원증 환경별 **Applet 대응**

## 토스플레이스와의 접점
- 비접촉 카드/NFC 단말 개발 경험
- 카드 인증 흐름과 보안 모듈 연동 경험
- 교통카드 계열(Tmoney/Ezl) 적용 경험
- 고객/운영 환경별 인증 정책 커스터마이징 경험`,
  highlights: [
    'ISO14443A/B 실물카드와 NFC/BLE 모바일카드를 함께 지원하는 카드리더 개발',
    'ISO7816 SAM 기반 인증 처리 및 암복호화 로직 구현',
    'Tmoney/Ezl 실물카드·모바일카드 출입 단말 적용 경험',
    '고객 환경별 모바일카드 인증 사양 설계 및 커스터마이징',
    '카드 인식 실패, 재시도, 예외 응답 중심의 현장 안정화 대응',
  ],
};
