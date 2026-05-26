import { Project } from '../../types/portfolio';

export const unattendedTerminalIntegration: Project = {
  title: '무인단말 인증 연동 및 통신 프로토콜 개발',
  type: 'project',
  description:
    '복합기, 키오스크, POS 환경에서 카드리더 인증 프로세스와 USB/Serial 통신 프로토콜을 설계하고 연동 소프트웨어까지 개발했습니다.',
  techStack: [
    'C',
    'C++',
    'USB Serial',
    'RS232',
    'RS485',
    'RS422',
    'Ethernet',
    'Electron',
  ],
  duration: '2022.01 - 현재',
  image: '/images/WorkProject/무인단말 인증 연동 및 통신 프로토콜 개발/KIOSK.png',
  content: `### 개요
복합기, 키오스크, POS 같은 **무인단말 환경** 에서 카드리더를 안정적으로 연동하기 위해 인증 프로세스와 통신 프로토콜을 설계했습니다.

단말 펌웨어뿐 아니라 **USB/Serial 연동 구조, Polling 기반 제어 방식, 연동용 PC 소프트웨어(Electron.js)** 까지 함께 개발했습니다.

## 내가 맡은 역할
- USB/Serial 기반 무인단말 인증 연동 플랫폼 개발
- RS232/RS485/RS422/Ethernet 기반 단말 통신 프로토콜 설계
- 전문 파싱, 재전송, 타임아웃, 예외 처리 로직 구현
- Serial 통신 기반 통신변환기 모듈 하드웨어 설계
- Serial 연동용 Electron.js 소프트웨어 개발

## 기술 포인트
- **Polling 기반 프로토콜 설계** 및 신뢰도 확보
- **QR Reader / Barcode Reader / Wiegand / HID** 연동 경험
- 단말-상위시스템-주변장치 간 인터페이스 설계
- 운영 환경에서 발생하는 통신 지연, 노이즈, 비정상 응답 대응

## 토스플레이스와의 접점
- POS/KIOSK 계열 디바이스 연동 경험
- 단말 통신 전문 설계 및 데이터 처리 경험
- 하드웨어와 PC 애플리케이션을 함께 다루는 디바이스 통합 경험`,
  highlights: [
    '복합기·키오스크·POS 환경의 USB/Serial 인증 연동 플랫폼 개발',
    'RS232/RS485/RS422/Ethernet 기반 단말 통신 프로토콜 설계',
    'Polling, 재전송, 타임아웃, 예외 처리 중심의 통신 안정화 경험',
    'Electron.js 기반 연동 소프트웨어와 통신변환기 모듈까지 통합 개발',
  ],
};
