# parkseik — 개발 문서

현재 버전: **v0.3.52**

## 버전 목록

| 버전                            | 주요 작업                                         | 날짜       |
| ------------------------------- | ------------------------------------------------- | ---------- |
| [v0.1.0](./changelog/v0.1.0.md) | 프로젝트 초기 세팅, 파비콘                        | 2026-05-15 |
| [v0.2.0](./changelog/v0.2.0.md) | SCSS 구조 세팅, 리셋 CSS                          | 2026-05-15 |
| [v0.2.1](./changelog/v0.2.1.md) | 폰트 및 공통 베이스 스타일                        | 2026-05-15 |
| [v0.3.0](./changelog/v0.3.0.md) | 글로벌 레이아웃 및 홈 페이지 구현                 | 2026-05-15 |
| [v0.3.1](./changelog/v0.3.1.md) | Prettier 설정, VS Code 통합, 서브 페이지 스캐폴드 | 2026-05-15 |
| [v0.3.2](./changelog/v0.3.2.md) | /projects/eum 라우트 스캐폴드                     | 2026-05-16 |
| [v0.3.3](./changelog/v0.3.3.md) | 웹표준·시맨틱·접근성 정비                         | 2026-05-16 |
| [v0.3.4](./changelog/v0.3.4.md) | Localnav 스타일링 및 구조 보강                    | 2026-05-16 |
| [v0.3.5](./changelog/v0.3.5.md) | /projects/eum 본문 구현 및 공통 스타일 보강       | 2026-05-17 |
| [v0.3.6](./changelog/v0.3.6.md) | Cloudflare R2 공개 버킷 설정 포팅                 | 2026-05-17 |
| [v0.3.7](./changelog/v0.3.7.md) | /projects/eum hero R2 비디오 임베드               | 2026-05-17 |
| [v0.3.8](./changelog/v0.3.8.md) | 비디오 01·03에 iPhone 프레임 오버레이             | 2026-05-17 |
| [v0.3.9](./changelog/v0.3.9.md) | 비디오 02에 iMac M4 24" Silver 프레임 오버레이    | 2026-05-17 |
| [v0.3.10](./changelog/v0.3.10.md) | 비디오 02 프레임을 CSS 미니멀 베젤로 교체       | 2026-05-17 |
| [v0.3.11](./changelog/v0.3.11.md) | 비디오 순차 재생 + 레이어 스택 + 100svh 제한    | 2026-05-17 |
| [v0.3.12](./changelog/v0.3.12.md) | section-hero 100svh 오버플로 수정              | 2026-05-17 |
| [v0.3.13](./changelog/v0.3.13.md) | hero 비디오 배속 + localnav 메뉴 정렬          | 2026-05-17 |
| [v0.3.14](./changelog/v0.3.14.md) | 클래스명 BEM 제거 + flat 대시 컨벤션 명문화    | 2026-05-17 |
| [v0.3.15](./changelog/v0.3.15.md) | Scroll Scrub Pattern 레퍼런스 문서 포팅       | 2026-05-17 |
| [v0.3.16](./changelog/v0.3.16.md) | /projects/eum Key Screens 섹션 구현            | 2026-05-17 |
| [v0.3.17](./changelog/v0.3.17.md) | .section-headline p 반응형 폭 보완            | 2026-05-17 |
| [v0.3.18](./changelog/v0.3.18.md) | 패키지 동기화 및 subnav 높이 차이 원인 분석   | 2026-05-18 |
| [v0.3.19](./changelog/v0.3.19.md) | /projects/eum Develop 섹션 추가 및 공통 스타일 확장 | 2026-05-18 |
| [v0.3.20](./changelog/v0.3.20.md) | /projects/eum 히어로 영상 화질 회복 (사전 배속 인코딩) | 2026-05-18 |
| [v0.3.21](./changelog/v0.3.21.md) | /projects/eum 히어로 영상 외장 1080p(DPR=1) 깨짐 해결 | 2026-05-18 |
| [v0.3.22](./changelog/v0.3.22.md) | /projects/eum 히어로 영상 step-jump 모드 전환 | 2026-05-18 |
| [v0.3.23](./changelog/v0.3.23.md) | /projects/eum 히어로를 video → image slideshow 전환 | 2026-05-18 |
| [v0.3.24](./changelog/v0.3.24.md) | /projects/eum 히어로를 animated WebP 자동재생으로 전환 | 2026-05-18 |
| [v0.3.25](./changelog/v0.3.25.md) | /projects/eum 히어로 animated WebP 화질 추가 향상 | 2026-05-18 |
| [v0.3.26](./changelog/v0.3.26.md) | /projects/eum 히어로 animated WebP를 lossless로 재인코딩 | 2026-05-18 |
| [v0.3.27](./changelog/v0.3.27.md) | /projects/eum 히어로를 mp4 video 자동재생으로 회귀 | 2026-05-18 |
| [v0.3.28](./changelog/v0.3.28.md) | /projects/eum 히어로 작업 잉여 R2 자산 정리 | 2026-05-18 |
| [v0.3.29](./changelog/v0.3.29.md) | 홈·localnav·공통 버튼·card·hero typography 미세 조정 | 2026-05-18 |
| [v0.3.30](./changelog/v0.3.30.md) | /projects/eum hero 영상 hi/lo DPR 분기 제거 (글씨 깨짐 회귀 해결) | 2026-05-18 |
| [v0.3.31](./changelog/v0.3.31.md) | /projects/eum hero 레이아웃 재구성 (영상 표시 폭 ~1.5×) | 2026-05-18 |
| [v0.3.32](./changelog/v0.3.32.md) | /projects/eum hero 비디오 수직 호흡 공간 추가 | 2026-05-19 |
| [v0.3.33](./changelog/v0.3.33.md) | /projects/eum hero 텍스트–비디오 겹침: frosted glass caption 활성화 | 2026-05-19 |
| [v0.3.34](./changelog/v0.3.34.md) | /projects/eum hero 재배치: phone 프레임 우측 이동 + frosted 제거 | 2026-05-19 |
| [v0.3.35](./changelog/v0.3.35.md) | /projects/eum hero video-wrapper max-width 1200px | 2026-05-19 |
| [v0.3.36](./changelog/v0.3.36.md) | /projects/eum hero 텍스트 영역 그라데이션 스크림 | 2026-05-19 |
| [v0.3.37](./changelog/v0.3.37.md) | /projects/eum hero phone 프레임 우측 flush | 2026-05-19 |
| [v0.3.38](./changelog/v0.3.38.md) | /projects/eum hero 영상 visibility 기반 재생 제어 | 2026-05-19 |
| [v0.3.39](./changelog/v0.3.39.md) | /projects/eum 카드 마크업 구조 재설계 | 2026-05-19 |
| [v0.3.40](./changelog/v0.3.40.md) | localnav 스크롤 등장·expand 애니메이션 + contentnav smooth scroll | 2026-05-19 |
| [v0.3.41](./changelog/v0.3.41.md) | carousel-slider 마크업 재설계 (타입 확장성 + 어드민화) | 2026-05-19 |
| [v0.3.42](./changelog/v0.3.42.md) | carousel-slider 실동작 슬라이더 구현 (좌우 화살표) | 2026-05-19 |
| [v0.3.43](./changelog/v0.3.43.md) | carousel-slider peek 슬라이더 (인접 카드 노출) | 2026-05-19 |
| [v0.3.44](./changelog/v0.3.44.md) | carousel-slider 마지막 슬라이드 중앙 정렬 수정 | 2026-05-19 |
| [v0.3.45](./changelog/v0.3.45.md) | /about 페이지 초기 구현 | 2026-05-20 |
| [v0.3.46](./changelog/v0.3.46.md) | /projects/eum hero monitor 와이드 뷰포트 height-driven 복귀 | 2026-05-20 |
| [v0.3.47](./changelog/v0.3.47.md) | /projects/eum hero monitor aspect-ratio 깨짐 방지 (min() 단일 식) | 2026-05-20 |
| [v0.3.48](./changelog/v0.3.48.md) | /projects/eum Discover 섹션 카드 3장 R2 이미지 임베드 + card-bleed media CSS 보완 | 2026-05-20 |
| [v0.3.49](./changelog/v0.3.49.md) | /projects/eum Discover 카드 이미지 가독성 회복 (retina cap 완화 + card-bleed 보더 + srcset 골조) | 2026-05-20 |
| [v0.3.50](./changelog/v0.3.50.md) | /projects/eum Define 섹션 methodology scroll-container 이식 (1600vh sticky, 4 아이템 RAF) | 2026-05-20 |
| [v0.3.51](./changelog/v0.3.51.md) | /projects/eum methodology callout 흐림 해결 + headline 줄바꿈 + 트레일링 여백 제거 | 2026-05-20 |
| [v0.3.52](./changelog/v0.3.52.md) | /projects/eum Develop 카드 3장 process 스크린샷 임베드 (브레인스토밍/MoSCoW/MVP, 328×456 retina-정합) | 2026-05-20 |

## 패턴 문서

- [Scroll Scrub Animation Pattern](./scroll-scrub-pattern.md) — Apple 스타일 스크롤 연동 영상 스크럽 패턴 (portfolio repo에서 포팅, 구현 전 레퍼런스)
