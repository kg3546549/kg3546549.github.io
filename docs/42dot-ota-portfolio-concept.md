# 42dot OTA Portfolio Concept

## Purpose

이 문서는 `job-apply/42dot-OTA` 브랜치에서 포트폴리오를 어떤 방향으로 재구성했는지 정리한 메모입니다.

기존 Toss Place 지원용 포트폴리오는 NFC, 교통카드, 보안 모듈, 결제 단말 접점을 중심으로 구성되어 있었습니다. 42dot OTA 직무용 브랜치에서는 같은 경력 중에서도 차량 소프트웨어 업데이트 직무와 연결되는 경험을 앞으로 배치했습니다.

## Target Role

42dot의 OTA 및 유선 소프트웨어 업데이트 시스템 개발 직무를 타깃으로 합니다.

채용공고에서 중요하게 본 축은 다음과 같습니다.

- OTA 및 유선 기반 소프트웨어 업데이트 시스템 개발과 유지보수
- 업데이트 관련 통신 프로토콜 및 데이터 인터페이스 정의
- SDV 기반 양산 차량의 소프트웨어 업데이트 대응
- 다양한 제어기의 업데이트 테스트와 이슈 대응
- Linux 기반 개발 환경 이해
- Rust / C++ 또는 compiled, statically typed language 기반 개발 역량
- Embedded software, firmware, IoT device development 경험
- BSP, Firmware, 운영 조직과의 협업 이해
- DevOps, CI/CD, orchestration 도구에 대한 이해

## Core Positioning

이번 브랜치의 핵심 포지셔닝은 다음과 같습니다.

> Bare-metal, RTOS, Linux 기반 단말에서 업데이트 구조, 통신 프로토콜, 현장 이슈 대응을 해 온 임베디드 소프트웨어 엔지니어

직접적인 Vehicle OTA 경험이나 UDS 경험을 과장해서 넣지 않았습니다. 대신 현재 경력에서 실제로 연결 가능한 항목을 선별했습니다.

- Bootloader 및 Firmware Download Protocol 기반 OTA 구조 설계
- Ethernet, RS232, RS485, RS422, CAN, M-LAN 기반 단말 통신 프로토콜 설계
- 업데이트 실패, 통신 지연, 비정상 응답, 현장 장애 대응 관점의 안정화 경험
- Bare-metal, RTOS, Linux 기반 단말 소프트웨어 개발 경험
- 지문/얼굴인증 단말의 OTA, Ethernet 기반 기기 관리, 서버 연동 프로토콜 경험
- 네트워크 드라이버 이슈와 현장 통신 장애 재현 및 분석 경험

## Content Strategy

### 1. Main Message

`src/data/portfolioData.ts`의 자기소개는 결제 단말/NFC 중심에서 SDV OTA/유선 업데이트 중심으로 변경했습니다.

강조 순서는 다음과 같습니다.

1. Bootloader / Firmware Download Protocol / OTA
2. Bare-metal / RTOS / Linux 단말 개발
3. 제어기 통신 프로토콜과 데이터 인터페이스
4. 현장 업데이트 및 통신 장애 분석

### 2. Project Order

프로젝트 노출 순서는 OTA 직무 관련도가 높은 순서로 바꿨습니다.

1. `accessControllerPlatform`: 제어장치 Firmware OTA 구조 개발
2. `biometricTerminalPlatform`: Linux/RTOS 단말 운영 안정화
3. `unattendedTerminalIntegration`: 단말 통신 프로토콜 및 인터페이스 개발
4. `contactlessCredentialTerminal`: 임베디드 단말의 보안/상태/예외 처리 경험

Toss Place 브랜치에서는 카드/NFC 프로젝트가 가장 앞에 오는 것이 자연스럽지만, 42dot OTA 브랜치에서는 Bootloader, Firmware Download Protocol, Linux, 통신 안정화가 먼저 보여야 합니다.

### 3. Company Fit Section

각 주요 프로젝트의 상세 모달에서 `토스플레이스와의 접점` 섹션을 `42dot OTA 직무와의 접점`으로 변경했습니다.

이 섹션의 목적은 단순히 회사명을 넣는 것이 아니라, 채용공고의 Responsibilities / Qualifications / Preferred Qualifications와 실제 경험을 연결하는 것입니다.

## Project Mapping

| Project | 42dot OTA 연결 포인트 |
| --- | --- |
| 제어장치 Firmware OTA 구조 개발 | Bootloader, Firmware Download Protocol, OTA 구조, 현장 설정 경로, 제어기 통신 |
| Linux·RTOS 단말 운영 안정화 | Linux, RTOS, OTA 플랫폼, Ethernet 기반 기기 관리, 네트워크 드라이버 이슈 분석 |
| 단말 통신 프로토콜 및 인터페이스 개발 | 통신 프로토콜 정의, 데이터 인터페이스, 재전송, 타임아웃, 예외 응답 처리 |
| 비접촉 카드·모바일카드 인증 단말 개발 | 제약 있는 임베디드 단말에서 상태 관리, 검증, 보안 처리, 예외 흐름 안정화 |
| 단말 통신 로그·패킷 분석 도구 | 장애 재현, 로그 분석, 프로토콜 디버깅 생산성 |
| 클라우드 SW 접속 테스트 Tool | 디바이스-클라우드 연결 Flow 진단, 현장 설치 기술자용 문제 분석 |

## What Was Intentionally Not Added

다음 항목은 채용공고에 있지만, 현재 포트폴리오에 직접 경험으로 쓰지 않았습니다.

- Vehicle OTA 직접 양산 경험
- UDS 기반 업데이트 시스템 개발 경험
- Rust 실무 경험
- Android 또는 nVidia 업데이트 프로세스 경험
- BSP를 깊게 다룬 경험
- CI/CD 또는 orchestration 도구를 활용한 업데이트 운영 경험

이 항목들은 면접에서 "직접 경험은 없지만 어떤 기존 경험으로 빠르게 확장할 수 있는지" 설명하는 방식이 더 안전합니다.

## Interview Talking Points

면접에서는 아래 흐름으로 설명하는 것이 좋습니다.

1. 차량 OTA 자체를 직접 개발한 것은 아니지만, 단말 펌웨어 업데이트 구조와 운영 안정화 경험이 있다.
2. Bootloader와 Firmware Download Protocol을 설계하면서 업데이트 전달, 설치, 실패 대응, 복구 가능성을 고려했다.
3. 다양한 통신 채널에서 재전송, 타임아웃, 비정상 응답, 현장 노이즈 같은 예외를 다뤘다.
4. Linux 기반 얼굴인식 단말과 Ethernet 기반 기기 관리 경험이 있어, 차량/제어기 환경의 운영 이슈를 소프트웨어 관점에서 분석할 수 있다.
5. Rust는 실무 경험이 없더라도 C/C++ 기반의 정적 타입 언어와 메모리/런타임 특성 이해를 바탕으로 학습 전환이 가능하다고 설명한다.

## Maintenance Notes

- 42dot OTA 브랜치에서는 `accessControllerPlatform`을 첫 번째 프로젝트로 유지하는 것이 좋습니다.
- Toss Place용 문구는 `job-apply/toss-place` 브랜치에 보존되어 있으므로 이 브랜치에 다시 섞지 않습니다.
- README나 `PORTFOLIO_GUIDE.md`까지 42dot 전용으로 바꾸면 공개 저장소의 범용성이 떨어질 수 있으므로, 현재는 데이터 파일과 이 컨셉 문서만 변경했습니다.
- 실제 지원 전에 Rust, UDS, DevOps 관련 학습 또는 작은 실습 프로젝트가 추가되면 Preferred Qualifications 대응력이 더 좋아집니다.
