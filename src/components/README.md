# components

도메인별 UI 컴포넌트를 모아둡니다

## 하위 디렉터리 구성

- layout/ : 레이아웃(헤더, 네비 등) 컴포넌트
- main/ : 메인 페이지 전용 컴포넌트
- modals/ : 모달 시스템 컴포넌트
- ui/ : 재사용 가능한 UI, shadcn 기반 컴포넌트 (기본 생성 완료)

## 파일 네이밍 컨벤션

- 컴포넌트 파일은 기본적으로 파스칼 케이스(ex. MintResultModal.tsx)를 사용합니다

- ui/ 하위 컴포넌트는 케밥 케이스(ex. navigation-menu.tsx)을 사용합니다다

## 보일러 플레이트 초기 파일 구성

- ui/button.tsx를 `pnpm add` 명령어를 통해 추가 후 화살표 함수 형태로 수정한 상태입니다
