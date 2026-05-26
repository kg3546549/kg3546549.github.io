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
  image: "/images/ToyProject/xv6 OS 분석 및 커널 개발/SystemCall.png",
  duration: "2025",
  github: "https://github.com/kg3546549/xv6_Practice",
  content: `# 개요
MIT의 교육용 Unix 기반 OS인 **xv6**를 직접 분석하고 수정한 운영체제 실습 프로젝트입니다.
QEMU 환경에서 xv6를 빌드·구동하며 **System Call 추가**, **커스텀 스케줄러 구현**, **성능 지표 측정**, **부팅 및 프로세스 실행 흐름 분석**을 진행했습니다.

## 1. System Call 분석 및 getppid 구현
- Ubuntu 기반 환경에서 xv6를 빌드하고 QEMU로 실행
- \`getppid\` System Call을 직접 추가
- 수정 파일: \`user.h\`, \`usys.S\`, \`syscall.h\`, \`syscall.c\`, \`sysproc.c\`
- \`myproc()->parent->pid\`를 반환하도록 구현
- 사용자 프로세스 → 인터럽트 → \`syscall()\` → \`sys_getppid()\` 흐름을 분석


상세 분석 링크:
- [System Calls in xv6](https://parallel-paradox-cd5.notion.site/System-Calls-in-xv6-1c3ec9e9ae738082b618c4086c48392b?pvs=74)

## 2. 스케줄러 분석 및 SSU Scheduler 구현
- PID 홀수/짝수 기준으로 프로세스를 그룹화해 번갈아 실행하는 스케줄러 구현
- \`ptable\` 순회, RUNNABLE 프로세스 선택, 타이머 인터럽트 기반 Context Switching 구조 분석
- Waiting Time / Turnaround Time / Response Time 측정 로직 추가


### 성능 비교
| 평균(tick) | Wait Time | Turn Around Time | Response Time |
| --- | --- | --- | --- |
| SSU Scheduler | 370.44 | 125.98 | 186.7 |
| xv6 Scheduler | 336.56 | 126.8 | 233.88 |

- Response Time은 약 **47 tick 개선**
- Turnaround Time은 유사
- Waiting Time은 증가했지만 첫 응답 속도 측면에서는 개선

상세 분석 링크:
- [Scheduler in xv6](https://parallel-paradox-cd5.notion.site/Scheduler-in-xv6-1eaec9e9ae7380e2b6e7ea472663231f)

## 정리
- \`getppid\` 추가를 통해 **System Call이 유저 공간에서 커널 함수로 연결되는 전체 흐름**을 분석
- SSU Scheduler 구현을 통해 **프로세스 그룹화 기반 스케줄링 정책과 성능 트레이드오프**를 실험
- xv6 부팅, 타이머 인터럽트, fork/exec, shell 실행까지 따라가며 **OS 내부 제어 흐름 전체**를 학습`,
  highlights: [
    "xv6 커널에 getppid System Call 직접 추가 구현",
    "System Call 호출 흐름 전체 분석 (유저 → 어셈블리 → 커널)",
    "PID 홀짝 기반 커스텀 스케줄러 구현",
    "Wait / Turnaround / Response Time 성능 지표 직접 측정 및 비교",
    "xv6 부팅 ~ Shell 실행까지 전체 초기화 흐름 분석",
  ],
  type: "toy"
};
