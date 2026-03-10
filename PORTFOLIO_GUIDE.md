# 🚀 Firmware Developer Portfolio Project Guide

이 문서는 펌웨어 개발자를 위한 React 포트폴리오 프로젝트의 현재 상태와 유지보수 방법을 정리한 가이드입니다. 모든 데이터는 JSON 기반으로 관리되도록 설계되었습니다.

## 🛠 Tech Stack
- **Framework:** React (TypeScript)
- **UI Library:** Chakra UI
- **State Management:** Zustand
- **Icons:** React Icons (Fa, Hi, etc.)
- **Font:** Pretendard (Variable)
- **Deployment:** GitHub Pages (gh-pages)

## 🎨 Design System (Professional Light Theme)
- **Background:** `#FFFFFF` (White)
- **Brand Color:** `#006EC8` (Primary Blue)
- **Accent Color:** `#F8302A` (Point Red)
- **Text Color:** `#013B90` (Heading/Primary Text)

## 📂 Project Structure
- `src/data/portfolio.json`: **[가장 중요]** 모든 텍스트 데이터와 설정이 담긴 파일
- `src/types/portfolio.ts`: 데이터 구조 정의 (TypeScript 인터페이스)
- `src/components/`: 각 섹션별 UI 컴포넌트
- `public/images/`: 본인의 프로젝트 스크린샷이나 사진을 넣는 폴더

## 📝 How to Customize (JSON Template)
`src/data/portfolio.json` 파일을 열어 다음 섹션들을 수정하세요:

1.  **Profile:** 이름, 직함, 연락처, 깃허브 아바타 링크 등
2.  **About:** 자기소개 및 주요 강점 키워드
3.  **Career:** 타임라인 형식의 경력 사항 (회사, 직무, 기간, 프로젝트)
4.  **Tech Stack:** 기술 명칭, 숙련도 및 Shields.io 배지 아이콘 링크
5.  **Awards:** 수상 및 자격증 정보
6.  **Projects:** 
    *   `type: "project"`: 주요 프로젝트
    *   `type: "toy"`: 토이 프로젝트 (게임패드 아이콘 표시)
    *   `image`: `/images/파일명.jpg` 형식으로 참조
    *   `content`: 마크다운 문법을 사용한 상세 설명 (클릭 시 모달로 표시)
7.  **Thank You:** 사이트 하단의 마지막 인사말

## 🖼 How to Add Images
1.  이미지 파일을 `portfolio/public/images/` 폴더에 복사합니다.
2.  `portfolio.json`에서 해당 이미지 경로를 `"/images/your-image.jpg"`와 같이 작성합니다.
3.  코드상에서 `process.env.PUBLIC_URL`이 자동으로 붙도록 처리되어 있어 GitHub Pages 배포 시에도 경로가 깨지지 않습니다.

## 🚀 Deployment (GitHub Pages)
1.  **저장소 이름 변경:** GitHub에서 저장소 이름을 `kg3546549.github.io`로 변경하는 것을 권장합니다.
2.  **배포 명령어:** 
    ```bash
    npm run deploy
    ```
3.  **확인:** 배포 후 1~2분 뒤에 `https://kg3546549.github.io`에서 확인 가능합니다.

## 💡 Maintenance Tips
- **상세 모달:** 프로젝트 카드 클릭 시 나타나는 모달은 간단한 마크다운(`###`, `-`, `**`)을 지원합니다.
- **폰트:** `public/index.html`에서 Pretendard CDN을 통해 로드됩니다.
- **가로 폭:** 모든 섹션은 `maxW="6xl"`로 통일되어 있어 왼쪽 정렬이 일관되게 유지됩니다.
