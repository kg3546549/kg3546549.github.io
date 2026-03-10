import { Project } from '../../types/portfolio';

export const cloudConnectionTestTool: Project = {
  title: "클라우드 SW 접속 테스트 Tool",
  description: "에스원 클라우드매니저 접속 과정을 테스트하고 장애 원인을 분석하는 진단 도구",
  techStack: [
    "Dart",
    "Flutter",
    "Network Diagnostics",
  ],
  duration: "2024.06",
  github: "",
  // image: "images/cloud-test-tool/main.png",
  content: `### 개요
에스원 클라우드매니저 접속 과정에서 발생하는 통신 문제를 분석하기 위한 **네트워크 접속 진단 도구**입니다.  
디바이스가 클라우드 시스템에 연결되는 전체 Flow를 Timeline 형태로 시각화하여 **현장 설치 기술자들이 장애 원인을 쉽게 파악할 수 있도록 설계**했습니다.

### 기능
- 클라우드 접속 Flow Timeline 표시
- 디바이스 → 클라우드 접속 프로세스 테스트
- DNS, 네트워크, 설정 오류 등 상세 원인 분석

### 구현 내용
Flutter 기반 애플리케이션으로 개발하여 현장 기술자들이  
클라우드 연결 장애 발생 시 **빠르게 원인을 분석하고 대응할 수 있도록 지원**합니다.`,
  highlights: [
    "클라우드 접속 과정 Timeline 시각화",
    "디바이스 → 클라우드 연결 프로세스 진단",
    "DNS 및 네트워크 오류 원인 분석 기능",
    "현장 설치 기술자용 장애 분석 도구 개발"
  ],
  type: "toy"
};