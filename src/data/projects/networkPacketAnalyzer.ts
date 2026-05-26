import { Project } from '../../types/portfolio';

export const networkPacketAnalyzer: Project = {
  title: "단말 통신 로그·패킷 분석 도구",
  description: "리더 장비와 관리 시스템 간 통신 데이터를 분석해 장애 원인 파악과 프로토콜 디버깅을 지원하는 분석 도구",
  techStack: [
    "Dart",
    "Flutter",
    "TypeScript",
    "React.js",
    "Electron.js",
    "TShark"
  ],
  duration: "2022.06",
  github: "",
  image: "/images/ToyProject/packet-analyzer/main.png",
  content: `### 개요
현장 장애 대응 과정에서 반복적으로 필요한 **통신 로그 분석, 패킷 확인, 프로토콜별 시각화** 작업을 빠르게 수행하기 위해 만든 분석 도구입니다.

출입, 근태, 식당, 관리 시스템과 리더 장비 사이의 데이터를 분석해 **통신 장애 원인 파악과 디버깅 생산성 향상** 에 활용했습니다.

### 기능
- 통신 로그 파일 파싱 및 분석
- 패킷 데이터 복호화 및 프로토콜별 시각화
- 실시간 로그 모니터링과 이상 로그 탐지
- 날짜/프로토콜 기준 필터링 및 정렬

### 구현 내용
- **V1.0**: Flutter 기반 로그 분석 도구
- **V2.0**: React + Electron 기반 데스크톱 애플리케이션으로 재구현

### 활용 포인트
- 필드 이슈 재현과 원인 분석 보조
- 단말-서버 간 전문 흐름 검증
- 운영 중 장애 대응 속도 개선`,
  highlights: [
    "단말 통신 패킷 복호화 및 로그 분석 도구 개발",
    "출입/근태/식당 시스템 장애 분석을 위한 프로토콜 시각화 지원",
    "Flutter 기반 V1에서 Electron 기반 V2로 재구현",
    "실시간 로그 모니터링과 이상 로그 탐지 기능 구현"
  ],
  type: "toy"
};
