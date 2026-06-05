import { Project } from '../../types/portfolio';

export const accessControllerPlatform: Project = {
  title: '제어장치 Firmware OTA 구조 개발',
  type: 'project',
  description:
    'Bare-metal, RTOS 기반 출입·방범 제어장치에서 Bootloader, Firmware Download Protocol, 현장 설정 경로를 포함한 업데이트 구조를 개발했습니다.',
  techStack: [
    'C',
    'STM32',
    'CAN',
    'M-LAN',
    'RS422',
    'Ethernet',
    'Wi-Fi',
    'RS232',
    'Bootloader',
    'OTA',
  ],
  duration: '2019.02 - 2022.01',
  image: '/images/WorkProject/access-security-controller/access-controller.png',
  content: `### 개요
**Bare-metal, RTOS 기반 출입·방범 제어장치** 에서 출입, 방범, 센서 제어, 상위 소프트웨어 연동, 현장 설정, 펌웨어 배포 구조까지 포함한 애플리케이션을 개발했습니다.

다양한 제어 버스와 네트워크 환경에서 실제 운영을 고려한 단말 구조를 설계하고, 설치 기술자와 운영 조직이 사용할 수 있는 설정 및 업데이트 경로를 함께 구축했습니다.

## 내가 맡은 역할
- **Bare-metal / RTOS 기반 Firmware Task 및 DataQueue 구조 설계**
- **CAN, M-LAN, RS422** 기반 출입/방범/센서 제어 애플리케이션 개발
- **Ethernet** 기반 출입제어 소프트웨어 연동 사양 설계 및 개발
- 현장 설치 기술자를 위한 **Wi-Fi / RS232 기반 기기 설정 모바일 앱 연동 개발**
- **Firmware OTA** 를 위한 **Bootloader** 및 **Firmware Download Protocol** 설계

## 기술 포인트
- 제어 버스와 상위 관리 시스템을 연결하는 단말 인터페이스 설계
- 설치/운영 단계에서 필요한 설정 경로와 진단 흐름 반영
- 펌웨어 배포를 위한 업데이트 안정성과 복구 가능성 고려
- 운영 환경에서 발생하는 통신 예외와 현장 대응 시나리오 반영

## 42dot OTA 직무와의 접점
- SDV 업데이트 시스템과 유사한 **업데이트 패키지 전달, 검증, 설치 흐름** 에 대한 실무 경험
- 현장 운영을 고려한 **Bootloader / Firmware Download Protocol / OTA 구조** 설계 경험
- 다양한 제어 인터페이스를 통합하고 예외 상황을 고려한 **디바이스 소프트웨어 개발** 경험
- 업데이트 실패, 통신 지연, 장비 상태 변화 등 운영 시나리오를 고려한 안정화 경험`,
  highlights: [
    'Bootloader 및 Firmware Download Protocol 기반 OTA 구조 설계',
    'Bare-metal / RTOS 기반 Firmware Task 및 DataQueue 구조 설계',
    'CAN, M-LAN, RS422, Ethernet 기반 제어기 통신 애플리케이션 개발',
    'Wi-Fi / RS232 기반 현장 설정 및 업데이트 경로 연동 개발',
    '운영 환경의 통신 예외와 복구 시나리오를 고려한 안정화',
  ],
};
