import { Project } from '../../types/portfolio';

export const xv6Practice: Project = {
  title: "xv6 OS 분석 및 커널 개발",
  description: "MIT의 교육용 Unix OS인 xv6를 분석하고, System Call 추가 및 커스텀 스케줄러를 직접 구현한 OS 실습 프로젝트",
  techStack: [
    "C",
    "x86 Assembly",
    "xv6",
    "QEMU",
  ],
  image: "images/xv6/SystemCall.png",
  duration: "2025",
  github: "https://github.com/kg3546549/xv6_Practice",
  content: `### 개요
MIT의 교육용 Unix 기반 OS인 **xv6**를 직접 분석하고 수정하는 OS 실습 프로젝트입니다.
QEMU 에뮬레이터 환경에서 xv6를 구동하며, 커널 내부 구조를 이해하고 직접 기능을 추가·수정했습니다.

### 실습 1 - System Call 추가 (getppid)
xv6에 \`getppid\` System Call을 직접 추가하며 커널의 System Call 처리 흐름을 분석했습니다.

- \`user.h\` / \`usys.S\` / \`syscall.h\` / \`syscall.c\` / \`sysproc.c\` 총 5개 파일 수정
- \`proc\` 구조체의 \`parent\` 포인터를 통해 부모 프로세스 PID 반환 구현
- System Call 호출 흐름 분석: 유저 프로세스 → 인터럽트 → syscall() → sys_getppid()

### 실습 2 - SSU 스케줄러 구현 및 성능 분석
PID의 홀수/짝수 기준으로 프로세스를 그룹화하여 번갈아 실행하는 **SSU 스케줄러**를 구현하고,
기존 xv6 Round-Robin 스케줄러와 성능을 비교 분석했습니다.

**수정 Scheduler**
- Wait Time: 370.44 tick
- Turnaround Time: 125.98 tick
- Response Time: 186.7 tick

**xv6 기본 Scheduler**
- Wait Time: 336.56 tick
- Turnaround Time: 126.8 tick
- Response Time: 233.88 tick

- Response Time 약 47tick 단축 (수정 스케줄러 우세)
- \`proc\` 구조체에 시간 측정 변수를 추가하여 Wait / Turnaround / Response Time 직접 측정`,
  highlights: [
    "xv6 커널에 getppid System Call 직접 추가 구현",
    "System Call 호출 흐름 전체 분석 (유저 → 어셈블리 → 커널)",
    "PID 홀짝 기반 커스텀 스케줄러 구현",
    "Wait / Turnaround / Response Time 성능 지표 직접 측정 및 비교",
    "xv6 부팅 ~ Shell 실행까지 전체 초기화 흐름 분석",
  ],
  type: "toy"
};
