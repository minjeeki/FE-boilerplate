# providers

애플리케이션 전역에서 사용되는 Provider 커미포넌트를 모아두는 디렉터리입니다.

- Provider들은 App.tsx에서 불러와 루트 트리를 구성합니다.

- Provider 간 의존성이 있을 경우 외부 -> 내부 순서로 감쌉니다.

- providers/ 하위 파일은 앱 루트에서 감싸야 하는 컴포넌트만을 명시합니다.

- 개별 페이지 또는 컴포넌트 전용 provider의 경우 해당 위치에서 사용합니다.

## 포함되는 예시

- `ThemeProvider` : 다크 모드·테마 설정

- `QueryProvider` : TanStack Query 전역 캐싱

- `ReduxProvider` 또는 `Zustand` 초기화 래퍼

- `AuthProvider` : 인증/인가 상태 관리

- `ToastProvider` : 전역 알림 시스템

- `ErrorBoundaryProvider` : 에러 경계 처리

## 보일러 플레이트 초기 파일 구성

- `QueryProvider.tsx` : TanStack Query 전역 캐싱
