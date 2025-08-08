# lib

애플리케이션 전역에서 사용하는 서비스 인스턴스와 환경별 설정을 관리하는 폴더입니다.

- 폴더명은 shadcn/ui 설정 시 기본 생성되는 디렉터리명을 그대로 사용합니다.

(외부 라이브러리 설정, API 클라이언트, 라우터, 상태 관리 초기화 코드 등)

## 보일러 플레이트 초기 파일 구성

- `axios.interceptors.ts` : Axios Interceptor, 초기 전체 코드 주석 처리 (미사용 시 파일 삭제 추천)

- `queryClient.ts` : TanstackQuery 인스턴스, 옵션 설정 필요할 경우 주석 해제 후 사용 (`providers/provider.tsx`에서 사용 중)

- `router.tsx` : React Router 설정, Data 라우팅 명시 용도 (`App.tsx`에서 사용 중)

- `utils.ts` : shadcn/ui 설정 시 기본 설정된 cn함수 명시
