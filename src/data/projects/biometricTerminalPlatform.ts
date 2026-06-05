import { Project } from '../../types/portfolio';

export const biometricTerminalPlatform: Project = {
  title: 'Linux·RTOS 단말 운영 안정화',
  type: 'project',
  description:
    'Bare-metal, RTOS, Linux 기반으로 지문·얼굴인증 단말을 개발하고, 서버 연동 인증과 현장 장애 분석을 통해 운영 안정화를 수행했습니다.',
  techStack: [
    'C',
    'C++',
    'Linux',
    'Qt',
    'STM32',
    'uC/OS-II',
    'Ethernet',
    'OTA',
  ],
  duration: '2019.02 - 현재',
  image: '/images/WorkProject/biometric-terminal-stabilization/s1-face-reader.png',
  content: `### 개요
**Bare-metal, RTOS, Linux** 기반 임베디드 단말에서 지문인증기와 얼굴인식 단말을 개발하고, 실제 운영 중 발생하는 장애를 분석해 개선했습니다.

단말 애플리케이션 개발에 그치지 않고 **네트워크 드라이버 이슈 분석, OTA, 서버 기반 인증 프로토콜, 현장 테스트 대응** 까지 폭넓게 수행했습니다.

## 내가 맡은 역할
- STM32, Rockchip, AVR, PIC 기반 Embedded Device Application 개발
- uC/OS-II 기반 Firmware Task 및 DataQueue 구조 설계
- ISO19794 기반 지문인증 단말 개발 및 장애 대응
- Linux + Qt 기반 얼굴인식 단말 UI/UX 개선
- 서버 기반 얼굴 인증 프로토콜 개발 및 현장 테스트 대응

## 기술 포인트
- **지문인증 단말 운영 안정화** 및 이슈 대응
- **서버 연동형 얼굴 인증** 프로토콜 설계
- **OTA 플랫폼 및 프로그램 개발**
- 네트워크 드라이버 장애 원인 분석 및 개선 개발
- 출입/방범/식당/근태 시스템의 실운영 환경 대응

## 42dot OTA 직무와의 접점
- Bare-metal, RTOS, Linux 등 다양한 런타임 환경에서의 디바이스 소프트웨어 개발 경험
- OTA 플랫폼, Ethernet 기반 기기 관리, 서버 연동 인증 프로토콜 개발 경험
- 현장 장애를 재현하고 네트워크 드라이버, 통신 상태, 단말 로그를 분석해 개선한 경험
- 양산 이후 운영 환경에서 발생하는 업데이트/통신 이슈 대응 역량`,
  highlights: [
    'Bare-metal, RTOS, Linux 기반 임베디드 단말 개발 경험',
    '지문인증 단말 개발, OTA 플랫폼, 운영 장애 대응 수행',
    'Linux + Qt 기반 얼굴인식 단말 및 서버 기반 인증 연동 개발',
    '현장 테스트와 네트워크 드라이버 이슈 분석을 통한 운영 안정화',
  ],
};
