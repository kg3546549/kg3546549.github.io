import { Project } from '../../types/portfolio';

export const scardElectronReactApp: Project = {
  title: "스마트카드 통신 및 APDU 분석 SW",
  description: "Electron과 React 기반의 스마트카드 통신, 프로토콜 분석, APDU 자동화 지원 애플리케이션",
  techStack: [
    "Electron",
    "React",
    "TypeScript",
    "Zustand",
    "PC/SC",
    "WinSCard",
    "ISO7816",
    "ISO14443",
    "Smart Card"
  ],
  duration: "2026.01",
  github: "https://github.com/kg3546549/Scard-electron-react-app",
  image: "images/scardElectronReactApp/APDU Diagram 1.gif",
  content: `### 개요
스마트카드와의 통신을 보다 효율적으로 수행할 수 있도록 만든 **데스크톱 기반 카드 분석 및 제어 도구**입니다.  
Electron + React 조합으로 UI를 구성하고, **WinSCard 드라이버 연동**을 통해 실제 카드 리더기와 통신하며, APDU 송수신과 프로토콜 분석, 시각적 플로우 기반 실행 기능을 제공합니다.

### 기능
- **Mifare 카드 섹터 읽기 및 분석**
- **ISO7816 APDU 명령 전송 및 실시간 응답 로그 확인**
- **노드 기반 APDU 다이어그램 편집 및 실행**
- **리더기 연결 상태를 반영하는 사이드바 UI**
- 스마트카드 통신 및 프로토콜 테스트를 위한 통합 도구 제공

### 설계
애플리케이션은 Electron 기반 데스크톱 환경에서 동작하며, React UI 위에 스마트카드 통신 기능을 결합한 구조입니다.

- **UI Layer**
  - React 기반 화면 구성
  - 통합 레이아웃 및 사이드바 네비게이션
  - 카드 리더 연결 상태 표시

- **State Management**
  - Zustand 기반 상태 관리

- **Card Communication Layer**
  - Custom WinSCard Driver 연동
  - 스마트카드 리더기와 고성능 통신 처리
  - APDU 송수신 및 응답 분석 지원

### 활용 포인트
스마트카드 개발 및 테스트 과정에서 반복적으로 필요한 **명령 전송, 응답 확인, 시퀀스 구성, 카드 데이터 분석**을 하나의 툴에서 수행할 수 있도록 설계되었습니다.`,
  highlights: [
    "Electron + React 기반 스마트카드 통신 데스크톱 앱",
    "Mifare 카드 읽기 및 분석 기능 제공",
    "ISO7816 APDU 송수신과 실시간 로그 확인 지원",
    "노드 기반 APDU 다이어그램 편집 및 실행 기능 구현",
    "Custom WinSCard Driver와 Zustand를 활용한 구조 설계"
  ],
  type: "toy"
};