import { Project } from '../../types/portfolio';

export const robotWebService: Project = {
  title: "실시간 로봇 모니터링 및 제어 시스템",
  type: "toy",
  description: "ROS1 로봇을 WebSocket 기반으로 제어하는 Robot Control System 웹 대시보드",
  techStack: [
    "React.js",
    "Socket.IO",
    "ROS1",
    "TypeScript",
    "Ubuntu",
    "ROS1 Melodic"
  ],
  duration: "2025.01 - 2026.12",
  github: "https://github.com/kg3546549/SSU-Robot-RCS-Frontend-V2",
  image: "images/RCS/gif.gif",
  content: `### 개요
ROS1 기반 로봇을 **웹 브라우저에서 실시간으로 모니터링하고 제어할 수 있는 Robot Control System**을 설계 및 구현했습니다.  
Frontend–Backend–Robot 구조로 분리된 아키텍처를 통해 **보안성과 확장성을 확보**하고, WebSocket 기반 통신으로 **저지연 실시간 제어와 센서 스트리밍**을 제공합니다.

시스템은 Yahboom **Rosmaster X3 Plus** 로봇을 대상으로 Ubuntu 18.04 / ROS Melodic 환경에서 실험되었습니다.

### 주요 기능
- WebSocket 기반 **실시간 로봇 이동 및 회전 제어**
- **조이스틱 기반 원격 제어 인터페이스**
- **LiDAR 스캔 시각화 및 2D 지도(Map) 표시**
- 로봇 **카메라 스트림 실시간 표시**
- 사용자 인증 및 로봇 접근 제어 (JWT 기반)

### 시스템 아키텍처
Frontend, Backend, Robot(ROS) 세 계층 구조로 설계되었습니다.

- **Frontend**
  - React 기반 대시보드 UI
  - Zustand 상태 관리
  - 로봇 제어 및 센서 데이터 시각화

- **Backend**
  - rosbridge를 통해 ROS와 직접 통신
  - WebSocket(Socket.IO) 이벤트 라우팅
  - JWT 인증 기반 로봇 접근 제어

- **Robot (ROS1)**
  - ROS 토픽 기반 센서 및 제어 메시지
  - LiDAR, 카메라, 로봇 상태 데이터 송신

### LiDAR 시각화
LaserScan 데이터를 이용해 LiDAR 스캔을 웹 캔버스에 렌더링합니다.

1. Polar(극좌표) → Cartesian(직교좌표) 변환  
\`x = r cos θ\`  
\`y = r sin θ\`

2. 화면 좌표 매핑 후 Canvas에 렌더링

이를 통해 **실시간 주변 환경 인식 결과를 웹에서 시각적으로 확인**할 수 있습니다.

### 통신 구조
관리 요청과 실시간 데이터 스트림을 분리했습니다.

- **REST API**
  - 로그인
  - 로봇 등록 / 조회 / 삭제
  - 권한 관리

- **WebSocket**
  - robot:move / rotate / stop / emergency
  - robotStatus 상태 스트림
  - LiDAR 및 센서 데이터 스트리밍
`,
  highlights: [
    "Frontend–Backend–ROS 분리 아키텍처 설계",
    "WebSocket(Socket.IO) 기반 실시간 로봇 제어",
    "LiDAR LaserScan 데이터를 이용한 실시간 센서 시각화",
    "JWT 기반 사용자 인증 및 로봇 접근 제어",
    "ROS rosbridge를 이용한 Web–ROS 통합 시스템 구현"
  ]
};