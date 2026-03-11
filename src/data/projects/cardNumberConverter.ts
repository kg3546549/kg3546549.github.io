import { Project } from '../../types/portfolio';

export const cardNumberConverter: Project = {
  title: "카드 번호 변환기",
  description: "타사 카드 번호 체계를 분석하여 에스원 시스템에서 사용할 수 있도록 변환하는 카드 번호 변환 도구",
  techStack: [
    "TypeScript",
    "React.js",
    "Electron.js",
  ],
  duration: "2023.01",
  github: "",
  image: "images/CSNConvertor/main.png",
  content: `### 개요
타사 카드 시스템에서 발급된 **ISO14443 13.56MHz 카드 UID를 에스원 시스템에서 사용할 수 있도록 변환하는 도구**입니다.  
카드 번호 체계를 분석하여 내부 시스템 규격에 맞게 재구성하고, 변환된 데이터를 파일로 관리할 수 있도록 구현했습니다.

### 기능
- ISO14443 13.56MHz 카드 **UID 암호화 및 번호 체계 변환**
- 타사 카드 번호를 **에스원 시스템 규격으로 변환**
- **대량 카드 데이터 변환 처리**
- 변환 결과를 **Excel 파일로 내보내기**

### 구현 내용
Electron 기반 데스크톱 애플리케이션으로 구현하여 카드 데이터 처리 및 변환을 효율적으로 수행하도록 설계했습니다.

- **Frontend**
  - React 기반 UI
  - 카드 UID 입력 및 변환 결과 확인

- **Processing**
  - 카드 UID 암호화 및 번호 체계 변환 로직 구현
  - 타사 카드 번호 체계 분석 및 매핑

- **Export**
  - 변환된 카드 데이터를 Excel 파일로 출력
`,
  highlights: [
    "ISO14443 13.56MHz 카드 UID 변환 알고리즘 구현",
    "타사 카드 번호 체계 분석 및 시스템 호환 변환",
    "Electron + React 기반 데스크톱 카드 처리 도구 개발",
    "변환 결과 Excel Export 기능 구현"
  ],
  type: "toy"
};