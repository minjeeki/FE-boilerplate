// import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
// import { apiClient } from '@/apis/core';

// // 요청 인터셉터
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // 예) 토큰 주입
//     // const token = localStorage.getItem('token');
//     // if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error),
// );

// // 응답 인터셉터
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     // 401 처리 / 재시도 로직
//     // if (error.response?.status === 401) {
//     //   await refreshToken();
//     //   return api(error.config!);
//     // }
//     return Promise.reject(error);
//   },
// );

// 사용 : main.tsx에서 임포트 해야함 (예: import '@/lib/axios.interceptors')
