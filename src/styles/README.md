# styles

프로젝트 전역 스타일을 관리합니다.

## 하위 파일 구성

- index.css : `main.tsx`에 연결된 프로젝트 전역 스타일 파일 (Tailwind CSS 기본 지시어, `tokens.css` import 포함)

- tokens.css : shadcn/ui 설치 시 생성되는 디자인 토큰 별도 분리한 파일 (index.css 내 가독성 향상 및 디자인 토큰 관리 용이 목적으로 분리)
