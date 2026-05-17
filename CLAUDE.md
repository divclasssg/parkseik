@AGENTS.md

# 클래스명 명명 규칙

모든 CSS 클래스명은 **단일 대시(`xxx-xxx-xxx`)** 컨벤션으로 통일한다. BEM 스타일(`block__element`, `block--modifier`)은 사용 금지.

- 요소(element): `phone-frame-bezel`, `monitor-frame-screen` — 더블 언더스코어 `__` 금지
- variant/수정자(modifier): `phone-frame-01`, `video-item-02` — 더블 대시 `--` 금지
- 상태(state): `is-` 접두사 없이 와일드 단어 사용 — `active`, `open`, `disabled` 등. 부모 셀렉터로 scope(`.phone-frame.active`)
- variant 인덱스(`01/02/03`)는 자산 파일명과 일치할 때 유지, 그 외엔 의미 기반 이름 권장
- Next.js 예약 ID(`#__next`)는 예외

새 클래스 도입 시 위 규칙 준수. 기존 BEM 클래스를 발견하면 같은 PR에서 평탄화하거나 별도 리네이밍 작업으로 분리.

# 커밋 전 필수 작업

커밋 전에 반드시 `docs/changelog/` 의 작업 내역 문서를 먼저 업데이트해야 한다.

- 완료된 작업은 현재 버전 파일(`docs/changelog/vX.Y.Z.md`)의 "작업한 내역"에 날짜와 함께 추가
- 버전 규칙: 기본은 patch 증가(`0.1.0` → `0.1.1`), 작업이 많거나 큰 기능이면 minor 증가(`0.1.0` → `0.2.0`)
- 새 버전이 시작되면 `docs/index.md`의 버전 목록과 현재 버전 포인터도 함께 업데이트
