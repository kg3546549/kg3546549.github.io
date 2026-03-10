import { Project } from '../../types/portfolio';

export const imageConverter: Project = {
  title: "이미지 변환 프로그램",
  description: "JPG 및 PNG 이미지를 카드리더 장비에서 사용할 수 있도록 변환하는 이미지 변환 도구",
  techStack: [
    "Dart",
    "Flutter",
    "Typescript",
    "React.js",
    "Electron.js",
    "Image Processing",
  ],
  duration: "2024.01",
  github: "",
  image: "images/image-converter/main.png",
  content: `### 개요
고객사의 CI 및 이미지를 **에스원 카드리더 장비에서 표시할 수 있는 포맷으로 변환하는 프로그램**입니다.  
이미지 데이터를 카드리더 장비 규격에 맞게 처리하고 암호화하여 리더 장비에서 적용 가능한 **바이너리 이미지 파일을 생성**하도록 구현했습니다.

### 기능
- JPG, PNG 등 이미지 파일 입력
- 카드리더 장비 규격에 맞는 바이너리 이미지 데이터 변환
- 암호화 로직을 적용한 이미지 생성

### 구현 내용
Flutter 기반 데스크톱 애플리케이션으로 구현하여  
고객사의 CI 이미지 등을 손쉽게 카드리더 장비에 적용할 수 있도록 설계했습니다.`,
  highlights: [
    "카드리더 장비 규격에 맞는 바이너리 이미지 변환 로직 구현",
    "이미지 데이터 암호화 및 장비 적용 포맷 생성",
    "Flutter 기반 이미지 처리 도구 개발"
  ],
  type: "toy"
};