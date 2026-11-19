// 피그마 디자인 시스템 01 · 컬러의 의미 기반 토큰
export const COLORS = {
  brand: {
    primary: '#8C78D5',
    strong: '#6B54CE',
    soft: '#F0EAFF',
    secondary: '#7B61C8',
    primaryAlpha50: '#8C78D580', // 피그마 Brand/Primary Opacity-50 (변수 purple/500-alpha-50)
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
    selected: '#F8F6FF', // 피그마 변수 surface/selected (선택 박스 Selected)
  },
  border: {
    default: '#ECE9F1',
    subtle: '#EFECF4',
    selected: '#AD99EF', // 피그마 변수 border/selected (Secondary 버튼 Pressed)
    brandSoft: '#DCD2FB', // 피그마 purple/300 (Chip Selected 테두리)
    error: '#EF8D88', // 피그마 변수 accent/coral (TextField Error 테두리)
  },
  status: {
    error: '#FF4641',
    success: '#009B8B',
  },
  feedback: {
    toast: '#332F3B', // 피그마 변수 feedback/toast (완료 알림 배경)
  },
  social: {
    kakao: '#FEE500',
  },
} as const;

// 참고: 피그마 Palette(이름이 색 코드인 색 40여 개)는 그대로 옮기지 않음.
// 화면에서 필요해지면 위 그룹에 의미 있는 이름으로 추가할 것.
