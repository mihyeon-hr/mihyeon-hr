# KDB생명 HRM 지원 포트폴리오 / Editorial Website

GitHub Pages에서 바로 작동하는 **순수 HTML + CSS + JavaScript** 웹사이트입니다. 빌드, 설치, Node.js가 필요 없습니다.

## 파일 구성

- `index.html` — 전체 페이지 콘텐츠 및 섹션 구조
- `styles.css` — 색상, 타이포그래피, 반응형 편집 레이아웃
- `script.js` — 2026년 월별 AI 구독 현황 SVG 차트
- `assets/` — 향후 실제 이미지 파일을 넣을 수 있는 폴더

## GitHub Pages 게시

1. GitHub에 새 저장소를 만들거나 기존 `mihyeon-hr` 저장소를 엽니다.
2. ZIP 압축을 풀고 **폴더 내부**의 `index.html`, `styles.css`, `script.js`, `assets`를 저장소 루트에 업로드합니다.
3. **Settings → Pages → Build and deployment → Deploy from a branch**를 선택합니다.
4. Branch `main`, Folder `/(root)`로 설정합니다.
5. 저장 후 `https://계정.github.io/저장소명/`에서 확인합니다. 기존 저장소가 Pages를 이미 사용 중이면 새 파일 배포만으로 갱신됩니다.

> `index.html`은 상대 경로(`./styles.css`)로 자산을 참조하므로 사용자 사이트/프로젝트 사이트 양쪽에 사용 가능합니다.

## 교체/편집 포인트

- **첫 화면 문구:** `index.html`의 `<section class="hero">`
- **프로젝트 내용:** `<article id="project-01">` ~ `<article id="project-05">`
- **색상:** `styles.css` 맨 앞의 `:root` 변수 `--navy`, `--blue`, `--paper` 등
- **VBA 화면:** `asset-placeholder` 영역을 실제 이미지 `<img src="./assets/vba.png" alt="정산 자동화 실행 화면">`로 대체
- **구독 대시보드:** `dashboard-placeholder` 영역을 실제 캡처로 대체
- **인사평가 가이드:** `guide-placeholder` 영역을 실제 가이드 이미지로 대체
- **산타마을 화면:** `village-placeholder` 영역을 실제 캡처로 대체
- **월별 차트 수치:** `script.js` 내 `values` 배열 수정
- **참여·만족도:** 현재 집계되지 않은 지표는 수치화하지 않았으므로 행사 종료 후 검증된 값만 추가

## 디자인 방향

차분한 KDB 블루 계열과 옅은 페이퍼 배경, 비대칭 편집 레이아웃, 큰 한국어 타이포그래피, 구분선, 여백을 사용했습니다. 카드·아이콘·그라디언트·그림자 사용을 최소화했습니다. 레퍼런스 링크는 접근 가능한 범위에서 확인했으며 직접적인 레이아웃 복제는 하지 않았습니다.

## 자료/표현 주의

- 회사 내부 실제 자료를 사용하기 전에 개인정보, 급여정보, 비용/계정 식별정보, 내부 시스템 URL을 삭제하거나 가려 주세요.
- 포트폴리오 원고의 **인사평가**와 **조직문화 이벤트**는 진행 중인 활동으로 표현합니다.
- 구독 건수 `2 → 79`는 **각 월의 구독 건수**이지 누적 건수가 아닙니다. 증가의 원인을 제도 개선만으로 단정하지 않습니다.
- 디자인에 사용한 SVG·CSS 도식은 실측 데이터나 회사 공식 결과물이 아니라 설명용입니다.
- 이 페이지는 개인 지원용 포트폴리오이며 **KDB생명의 공식 사이트나 공식 디자인이 아닙니다.**
