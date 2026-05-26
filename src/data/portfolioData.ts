import { PortfolioData } from '../types/portfolio';
import {
  contactlessCredentialTerminal,
  accessControllerPlatform,
  unattendedTerminalIntegration,
  biometricTerminalPlatform,
  robotWebService,
  ros_slam_navigation,
  xv6Practice,
  scardElectronReactApp,
  cardNumberConverter,
  networkPacketAnalyzer,
  imageConverter,
  cloudConnectionTestTool,
} from './projects';

export const portfolioData: PortfolioData = {
  profile: {
    name: '김건',
    title: 'Embedded Firmware Engineer',
    email: 'kg3546549@email.com',
    github: 'https://github.com/kg3546549',
    phone: '+82 10-4596-7142',
    location: '서울, 대한민국',
    avatar: 'images/profile.png',
  },
  about: {
    introduction: `
6년 이상 카드리더, 지문리더, 얼굴리더 등 인증 단말을 개발해 온 임베디드 소프트웨어 엔지니어입니다.
ISO14443A 기반의 Contactless 카드와 모바일카드 인증, SAM 기반 보안 처리, 단말 통신 프로토콜 설계, 현장 장애 분석과 안정화까지 단말 소프트웨어 전반을 담당해 왔습니다.
토스플레이스의 결제 단말 개발 업무와 직접 맞닿는 NFC, 교통카드, 보안 모듈, 임베디드 플랫폼 경험을 중심으로 포트폴리오를 구성했습니다.
`,
    highlights: [
      'ISO14443A/B, Tmoney, Ezl, NFC/BLE 모바일카드 기반 카드리더 개발',
      'ISO7816 SAM 인증 처리 및 암복호화 로직 구현',
      'Bare-metal, RTOS, Linux 기반 단말 개발 경험 (STM32, Rockchip, AVR, PIC)',
      'USB/Serial, CAN, M-LAN, RS232/RS485/RS422, Ethernet 기반 단말 통신 프로토콜 설계 및 안정화',
    ],
  },
  career: [
    {
      company: '(주)에스원',
      position: '카드리더 펌웨어 엔지니어',
      duration: '2022.01 - 현재',
      description:
        '비접촉 카드, 모바일카드, 무인단말 연동 중심의 카드리더 펌웨어와 인증 사양을 설계하고 개발했습니다.',
      projects: [
        'ISO14443A/B 실물카드 및 NFC/BLE 모바일카드 카드리더 개발',
        'Tmoney/Ezl 실물카드·모바일카드 출입 시스템 적용',
        'ISO7816 SAM 기반 인증 및 암복호화 로직 구현',
        '복합기/키오스크/POS 연동용 USB Serial 인증 프로토콜 설계',
        'RS232/RS485/RS422/Ethernet 기반 단말 통신 전문 설계 및 안정화',
        '지문인증 단말 개발 및 OTA, Ethernet 기반 기기 관리 프로토콜 개발',
        'Linux + Qt 기반 얼굴인식 단말 UI/UX 개선 및 서버 기반 인증 연동',
        '현장 통신 장애, 네트워크 드라이버 이슈 원인 분석 및 개선 개발',
      ],
    },
    {
      company: '(주)에스원',
      position: '출입 컨트롤러(ACU) 펌웨어 엔지니어',
      duration: '2019.02 - 2020.07',
      description:
        '출입 통제 시스템과 생체인증 단말의 펌웨어 개발, 통신 연동, 장애 분석과 개선 개발을 담당했습니다.',
      projects: [
        'Bare-metal / RTOS 기반 출입 단말 Firmware Task 및 DataQueue 구조 설계',
        'CAN, M-LAN, RS422 기반 출입/방범/센서 제어 애플리케이션 개발',
        'Ethernet 기반 출입제어 소프트웨어 연동 사양 설계 및 개발',
        'Wi-Fi / RS232 기반 기기 설정용 모바일 앱 연동 개발',
        'Bootloader 및 Firmware Download Protocol 기반 OTA 구조 설계',        
      ],
    },
  ],
  education: [
    {
      school: '숭실대학교 IT대학',
      major: '디지털미디어학과',
      duration: '2024.03 - 현재',
      status: '3학년 재학중',
    },
    {
      school: '청주공업고등학교',
      major: '컴퓨터전자과',
      duration: '2016.03 - 2019.02',
      status: '졸업',
    },
  ],
  military: [
    {
      organization: '육군 제8기동사단',
      position: '정보통신대대 정보보호병 병장 만기전역',
      duration: '2020.07 - 2022.01',
      description:
        'UTM, NAC 등 보안 장비 운용과 통신 환경 대응 경험을 바탕으로 이후 현장 장애 분석과 운영 안정화 역량의 기반을 쌓았습니다.',
    },
  ],
  techStack: [
    {
      category: 'Embedded',
      technologies: [
        {
          name: 'C / C++',
          level: 'Advanced',
          badges: [
            'https://img.shields.io/badge/C-00599C?style=flat-square&logo=C&logoColor=white',
            'https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=Cplusplus&logoColor=white',
          ],
        },
        {
          name: 'uC/OS-II',
          level: 'Advanced',
          badges: [],
        },
        {
          name: 'Bare-metal',
          level: 'Advanced',
          badges: [],
        },
        {
          name: 'Linux',
          level: 'Intermediate',
          badges: ['https://img.shields.io/badge/Linux-000000?style=flat-square&logo=Linux&logoColor=white'],
        },
      ],
    },
    {
      category: 'Application',
      technologies: [
        {
          name: 'Flutter',
          level: 'Advanced',
          badges: ['https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=Flutter&logoColor=white'],
        },
        {
          name: 'Qt',
          level: 'Intermediate',
          badges: [],
        },
        {
          name: 'Electron.js',
          level: 'Intermediate',
          badges: ['https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white'],
        },
        {
          name: 'React.js',
          level: 'Intermediate',
          badges: ['https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white'],
        },
      ],
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git', level: 'Advanced' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'IAR Embedded Workbench', level: 'Advanced' },
        { name: 'STM32CubeIDE', level: 'Intermediate' },
        { name: 'Altium Designer', level: 'Intermediate' },
      ],
    },
  ],
  achievements: [
    {
      title: '2018 전국기능경기대회\n공업전자기기 동메달',
      organization: '고용노동부',
      date: '2018.10',
      description: `공업전자기기 분야에서 전국 3위를 차지하여 동메달을 수상하였습니다.
대회에서는 PWM 측정기 회로 설계, 납땜, 로봇 팔 시스템 펌웨어 개발, 인형뽑기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 연마하였습니다.`,
      link: 'https://www.ccdailynews.com/news/articleView.html?idxno=980916',
      youtubeLink: 'https://www.youtube.com/watch?v=heukxeQGX0Q',
    },
    {
      title: '2018 충북기능경기대회\n공업전자기기 금메달',
      organization: '충청북도 교육청',
      date: '2018.10',
      description: '공업전자기기 분야에서 충북 1위를 차지하여 금메달을 수상하였습니다.',
      link: 'https://www.jbnews.com/news/articleView.html?idxno=837057',
    },
    {
      title: '2017 전국기능경기대회\n공업전자기기 장려상',
      organization: '고용노동부',
      date: '2017.10',
      description: `공업전자기기 분야에서 전국 5위를 차지하여 장려상을 수상하였습니다.
전자호구 회로 설계, 납땜 및 조립, 식물공장 제어 시스템 펌웨어 개발, 엘레베이터 제어기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 평가받았습니다.`,
      link: 'https://www.ccdailynews.com/news/articleView.html?idxno=980916',
    },
    {
      title: '2017 전국 고교생 전자CAD \n기술대회 대상',
      organization: '한국폴리텍대학교, 나인플러스IT, 고용노동부',
      date: '2017.07',
      description: `공업전자기기 분야에서 전국 5위를 차지하여 장려상을 수상하였습니다.
전자호구 회로 설계, 납땜 및 조립, 식물공장 제어 시스템 펌웨어 개발, 엘레베이터 제어기 회로 설계 및 조립 등 다양한 전자기기 제작 기술을 평가받았습니다.`,
    },
    {
      title: '2017 충북기능경기대회\n공업전자기기 동메달',
      organization: '충청북도 교육청',
      date: '2017.04',
      description: '공업전자기기 분야에서 충북 3위를 차지하여 동메달을 수상하였습니다.',
    },
    {
      title: '2016 전국 고교생 전자CAD \n기술대회 대상(1위)',
      organization: '한국폴리텍대학교, 나인플러스IT',
      date: '2016.07',
      description: `한국폴리텍대학교에서 실시한 전국 고교생 전자CAD 기술대회에서 대상(1위)을 수상하였습니다.`,
    },
  ],
  languages: [
    {
      language: 'English',
      exam: 'OPIc',
      level: 'IM2',
      description: '업무 협업 및 기술 문서 독해가 가능한 수준의 영어 커뮤니케이션 역량을 보유하고 있습니다.',
    },
    {
      language: 'Japanese',
      exam: 'SJPT',
      level: 'Level 6',
      description: '일본어 기술 커뮤니케이션과 현장 안내, 협업 대응에 활용 가능한 수준입니다.',
    },
  ],
  activities: [
    {
      title: '지방기능경기대회 기술위원',
      organization: '한국산업인력공단',
      duration: '2022, 2023, 2026',
      description: '공업전자기기 직종 심사위원 및 과제 출제',
      type: 'Technical Committee',
    },
    {
      title: '일본 SECOM 주요 인사 방문 시 동시통역',
      organization: '에스원',
      duration: '2024',
      description: '관제센터와 주요 시설 안내 과정에서 동시통역을 수행했습니다.',
      type: 'Interpretation',
    },
  ],
  projects: [
    contactlessCredentialTerminal,
    unattendedTerminalIntegration,
    biometricTerminalPlatform,
    robotWebService,
    ros_slam_navigation,
    xv6Practice,
    scardElectronReactApp,
    cardNumberConverter,
    networkPacketAnalyzer,
    imageConverter,
    cloudConnectionTestTool,
    accessControllerPlatform,
  ],
  thankYou: {
    message: `비접촉 카드, 보안 모듈, 단말 통신, 운영 안정화 경험을 결제 단말 도메인에 확장하고 싶습니다.
결제 단말 소프트웨어를 더 깊게 개발할 기회를 찾고 있습니다.`,
  },
};
