import { Project } from '../../types/portfolio';

export const scardElectronReactApp: Project = {
  title: "스마트카드 통신 및 APDU 검증 도구",
  description: "Electron과 React 기반으로 스마트카드 통신, APDU 송수신, ISO7816 검증을 지원하는 데스크톱 분석 도구",
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
  image: "/images/ToyProject/스마트카드 통신 및 APDU 검증 도구/APDU Diagram 1.gif",
  content: `### 개요
스마트카드 개발과 검증 과정에서 반복적으로 수행하는 **APDU 송수신, 응답 확인, 카드 데이터 분석** 을 효율화하기 위해 만든 데스크톱 도구입니다.

Electron + React 기반 UI와 **WinSCard 연동** 을 통해 실제 리더와 통신하며, ISO7816 중심의 테스트 흐름을 빠르게 검증할 수 있도록 구성했습니다.

### 기능
- **ISO7816 APDU 명령 전송 및 실시간 응답 로그 확인**
- **Mifare / ISO14443 카드 데이터 읽기 및 분석**
- **노드 기반 APDU 시퀀스 편집 및 실행**
- 리더 연결 상태와 응답 흐름을 한 화면에서 확인

### 활용 포인트
- 카드리더 펌웨어 개발 시 APDU 검증 보조 도구로 활용
- SAM/카드 응답 확인 및 반복 테스트 자동화
- 프로토콜 분석과 디버깅 생산성 향상`,
  highlights: [
    "Electron + React 기반 스마트카드 통신 데스크톱 도구 개발",
    "ISO7816 APDU 송수신 및 실시간 응답 로그 확인 지원",
    "Mifare / ISO14443 카드 데이터 분석 기능 제공",
    "반복 테스트를 위한 노드 기반 APDU 시퀀스 실행 기능 구현"
  ],
  type: "toy"
};
