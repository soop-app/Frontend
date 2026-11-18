// 피그마 디자인 시스템 01 · 컬러의 의미 기반 토큰
export const COLORS = {
  brand: {
    primary: '#8C78D5',
    strong: '#6B54CE',
    soft: '#F0EAFF',
    secondary: '#7B61C8',
  },
  text: {
    primary: '#2D2A36',
    strong: '#5C5668',
    secondary: '#706978',
    muted: '#928C9E',
    disabled: '#C4BFD0',
  },
  surface: {
    canvas: '#FAF9FC',
    white: '#FFFFFF',
    tinted: '#F7F5FE',
    subtle: '#F4F2F7',
  },
  border: {
    default: '#ECE9F1',
    subtle: '#EFECF4',
    selected: '#AD99EF', // 피그마 변수 border/selected (Secondary 버튼 Pressed)
  },
  status: {
    error: '#FF4641',
    success: '#009B8B',
  },
  social: {
    kakao: '#FEE500',
  },
} as const;
