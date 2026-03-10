import { Project } from '../../types/portfolio';

export const ros_slam_navigation: Project = {
  title: "ROS 기반 SLAM 및 Navigation",
  description: "ROS1 Melodic 환경에서 Lidar와 Depth Camera를 이용한 SLAM 및 자율주행 시스템 구현",
  techStack: [
    "Robot",
    "ROS1",
    "SLAM",
    "Navigation",
    "Gazebo",
    "Rviz",
    "Ubuntu",
    "ROS1 Melodic"
  ],
  duration: "2025.01 - 2026.01",
  github: "",
  image: "images/ROS_SLAM/SLAM.gif",
  content: `### 개요
ROS1 Melodic 환경에서 **SLAM(Simultaneous Localization and Mapping)**과 **Navigation 자율주행 시스템**을 구현했습니다.  

Yahboom사의 **Rosmaster X3 Plus** 로봇을 기반으로 Lidar Sensor와 Depth Camera를 활용하여 주변 환경을 인식하고, 생성된 지도를 기반으로 목적지까지 **경로 계획(Path Planning) 및 자율 이동**을 수행합니다.

개발 과정에서는 **Gazebo와 TurtleBot3 기반 시뮬레이션 환경**을 이용하여 SLAM과 Navigation 알고리즘을 검증하고, **Rviz를 통해 센서 데이터와 로봇 상태를 시각화**했습니다.

### 주요 기능
- Lidar 기반 **SLAM 지도 생성**
- 생성된 Map 기반 **자율 주행 Navigation**
- **Rviz 기반 센서 데이터 및 로봇 위치 시각화**
- Gazebo 시뮬레이션을 통한 **TurtleBot3 환경 검증**

### 시스템 아키텍처
SLAM과 Navigation 시스템은 Simulation, Perception, Navigation 계층으로 구성됩니다.

- **Simulation (Gazebo)**
  - TurtleBot3 로봇 시뮬레이션 환경
  - Lidar 및 Depth Camera 센서 데이터 생성
  - 가상 환경에서 로봇 주행 테스트

- **Perception (SLAM)**
  - Lidar LaserScan 데이터를 이용한 환경 인식
  - gmapping 기반 SLAM 알고리즘
  - 실시간 지도 생성 및 업데이트

- **Navigation**
  - 생성된 Map 기반 Localization (AMCL)
  - Global / Local Path Planning
  - 장애물 회피 및 목표 지점 이동

### SLAM 프로세스
로봇이 이동하면서 Lidar 데이터를 기반으로 환경 지도를 생성합니다.

1. Gazebo 시뮬레이션에서 TurtleBot3 로봇 실행  
2. SLAM 노드(gmapping) 실행  
3. Teleop을 통해 로봇 이동 및 지도 생성  
4. map_server를 이용해 생성된 지도 저장  

### Navigation 프로세스
생성된 지도를 기반으로 로봇이 목표 지점까지 자율적으로 이동합니다.

1. Navigation 스택 실행 (move_base)  
2. AMCL을 이용한 로봇 위치 추정  
3. Global Planner를 통한 경로 생성  
4. Local Planner를 통한 실시간 장애물 회피  

### 시각화 (Rviz)
Rviz를 통해 다음 정보를 실시간으로 확인할 수 있습니다.

- SLAM으로 생성된 지도(Map)
- 로봇 위치(Localization)
- Lidar 센서 스캔 데이터
- 목표 경로(Path Planning)
`,
  highlights: [
    "ROS1 Melodic 기반 SLAM 및 Navigation 시스템 구현",
    "Gazebo와 TurtleBot3 기반 로봇 시뮬레이션 환경 구축",
    "Lidar LaserScan 데이터를 이용한 SLAM 지도 생성",
    "AMCL 기반 Localization 및 move_base Navigation 구현",
    "Rviz를 통한 센서 데이터 및 경로 시각화"
  ],
  type: "toy"
};