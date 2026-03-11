import { PortfolioData } from '../types/portfolio';
// import { universityAccess } from './projects/universityAccess';
import { 
  universityAccess,
  custom_security_systems,
  xv6Practice,
  robotWebService, 
  scardElectronReactApp, 
  cardNumberConverter, 
  networkPacketAnalyzer, 
  imageConverter, 
  cloudConnectionTestTool, 
  ros_slam_navigation
} from './projects';

export const portfolioData: PortfolioData = {
  profile: {
    name: "김건",
    title: "Firmware / Embedded Systems Developer",
    email: "kg3546549@email.com",
    github: "https://github.com/kg3546549",
    phone: "+82 10-4596-7142",
    location: "서울, 대한민국",
    avatar: "images/profile.jpeg"
  },
  about: {
    introduction: 
    `
    임베디드 시스템과 하드웨어 제어에 열정을 가진 펌웨어 개발자입니다. 효율적인 리소스 관리와 신뢰성 있는 시스템 구축을 지향합니다.
    최근에는 로봇 제어 시스템(ROS, SLAM, Navigation)에 관심을 갖고 연구를 진행하고 있습니다.
    `,
    highlights: [
      "ARM Cortex-M 시리즈 기반 펌웨어 개발 경험",
      "FreeRTOS 및 Bare-metal 환경 개발 (STM32, ATMEGA ...)",
      "I2C, SPI, UART 등 다양한 통신 프로토콜 구현",
      "C/C++ 기반의 ISO14443 스마트카드 제어 로직 작성"
    ]
  },
  career: [
    {
      company: "(주)에스원",
      position: "카드리더 펌웨어 엔지니어",
      duration: "2022.01 - 현재",
      description: "출입용 카드리더 임베디드 개발 및 품질 관리를 담당했습니다.",
      projects: [
        "ISO14443A/B 카드 리더 펌웨어 개발 및 최적화",
        "RS422/Ethernet 통신 기반 카드리더 통신 프로토콜 설계 및 개발"
      ]
    },
    {
      company: "육군 제8기동사단",
      position: "정보통신대대 정보보호병 병장 만기전역",
      duration: "2020.07 - 2022.01",
      description: "",
      projects: [
      ]
    },
    {
      company: "(주)에스원",
      position: "출입 컨트롤러(ACU) 펌웨어 엔지니어",
      duration: "2019.02 - 2020.07",
      description: "출입 통제 시스템의 펌웨어 개발과 유지보수를 담당했습니다.",
      projects: [
        "한양대학교 출입 통제 시스템 노후화 개선 개발",
        "대규모 출입 시스템 장애 원인 분석 및 개선",
      ]
    }
  ],
  techStack: [
    {
      category: "Embedded",
      technologies: [
        { 
          name: "C", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/C-00599C?style=flat-square&logo=C&logoColor=white"]
        },
        { 
          name: "C++", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=Cplusplus&logoColor=white"]
        },
        { 
          name: "FreeRTOS", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/FreeRTOS-0085C1?style=flat-square&logo=FreeRTOS&logoColor=white"]
        },
        { 
          name: "Linux", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/Linux-000000?style=flat-square&logo=Linux&logoColor=white"]
        }
      ]
    },
    {
      category: "Web",
      technologies: [
        { 
          name: "Javascript", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=React&logoColor=white"]
        },
        { 
          name: "React.js", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"]
        },
        { 
          name: "Nest.js", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/Nest.js-E0234E?style=flat-square&logo=NestJS&logoColor=white"]
        },
        { 
          name: "Electron.js", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white"]
        }
      ]
    },
    {
      category: "Mobile",
      technologies: [
        { 
          name: "Dart", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/Dart-00B4AB?style=flat-square&logo=Flutter&logoColor=white"]
        },
        { 
          name: "Flutter", 
          level: "Advanced",
          badges: ["https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=Flutter&logoColor=white"]
        },
        { 
          name: "Swift", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/Swift-FA7343?style=flat-square&logo=Swift&logoColor=white"]
        }
      ]
    },
    {
      category: "Robot",
      technologies: [
        { 
          name: "ROS1", 
          level: "Intermediate",
          badges: ["https://img.shields.io/badge/ROS-22314E?style=flat-square&logo=ros&logoColor=white"]
        }
      ]
    },
    {
      category: "Tools",
      technologies: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "IAR Embedded Workbench", level: "Advanced" },
        { name: "STM32CubeIDE", level: "Intermediate" },
        { name: "Altium Designer", level: "Intermediate"}
      ]
    }
  ],
  achievements: [
    {
      title: "2018 전국기능경기대회\n공업전자기기 동메달",
      organization: "고용노동부",
      date: "2018.10",
      description: 
`공업전자기기 분야에서 전국 3위를 차지하여 동메달을 수상하였습니다.
대회에서는 PWM 측정기 회로 설계, 납땜, 로봇 팔 시스템 펌웨어 개발, 인형뽑기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 연마하였습니다.`,
      link: "https://www.ccdailynews.com/news/articleView.html?idxno=980916",
      youtubeLink: "https://www.youtube.com/watch?v=heukxeQGX0Q",
    },
    {
      title: "2018 충북기능경기대회\n공업전자기기 금메달",
      organization: "충청북도 교육청",
      date: "2018.10",
      description: "공업전자기기 분야에서 충북 1위를 차지하여 금메달을 수상하였습니다.",
      link: "https://www.jbnews.com/news/articleView.html?idxno=837057"
    },
    {
      title: "2017 전국기능경기대회\n공업전자기기 장려상",
      organization: "고용노동부",
      date: "2017.10",
      description: `공업전자기기 분야에서 전국 5위를 차지하여 장려상을 수상하였습니다.
전자호구 회로 설계, 납땜 및 조립, 식물공장 제어 시스템 펌웨어 개발, 엘레베이터 제어기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 평가받았습니다.`,
      link: "https://www.ccdailynews.com/news/articleView.html?idxno=980916"
    },
    {
      title: "2017 전국 고교생 전자CAD \n기술대회 대상",
      organization: "한국폴리텍대학교, 나인플러스IT, 고용노동부",
      date: "2017.07",
      description: `공업전자기기 분야에서 전국 5위를 차지하여 장려상을 수상하였습니다.
전자호구 회로 설계, 납땜 및 조립, 식물공장 제어 시스템 펌웨어 개발, 엘레베이터 제어기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 평가받았습니다.`,
    },
    {
      title: "2017 충북기능경기대회\n공업전자기기 금메달",
      organization: "충청북도 교육청",
      date: "2017.04",
      description: "공업전자기기 분야에서 충북 3위를 차지하여 동메달을 수상하였습니다.",
    },
    {
      title: "2016 전국 고교생 전자CAD \n기술대회 동상",
      organization: "한국폴리텍대학교, 나인플러스IT",
      date: "2016.07",
      description: `공업전자기기 분야에서 전국 5위를 차지하여 장려상을 수상하였습니다.
전자호구 회로 설계, 납땜 및 조립, 식물공장 제어 시스템 펌웨어 개발, 엘레베이터 제어기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 평가받았습니다.`,
    }
  ],
  activities: [
    {
      title: "지방기능경기대회 기술위원",
      organization: "한국산업인력공단",
      duration: "2022, 2023, 2026",
      description: "공업전자기기 직종 심사위원 및 과제 출제",
      type: "Technical Committee"
    },
    {
      title: "일본 SECOM 사외이사 등 주요인사 방문 당시 동시통역",
      organization: "에스원",
      duration: "2024",
      description: "일본 SECOM의 하나오카 타쿠로(에스원 대표이사) 취임 당시 에스원 관제센터 등 주요 시설 안내 동시통역 수행",
      type: "Interpretation"
    }
  ],
  projects: [
    universityAccess,
    custom_security_systems,
    scardElectronReactApp,
    
    cardNumberConverter,
    networkPacketAnalyzer,

    imageConverter,
    
    robotWebService,
    ros_slam_navigation,
    xv6Practice,
    
    cloudConnectionTestTool,
  ],
  thankYou: {
    message: 
`부족한 글을 읽어주셔서 감사합니다. 
언제나 기술적인 도전과 협업을 환영합니다!`
  }
};
