// 피그마 변수 space/* · radius/* · height/* (이름의 숫자 = 값)
// 사용: { padding: SPACE[16], borderRadius: RADIUS[12], height: HEIGHT[44] }

export const SPACE = {
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
} as const;

export const RADIUS = {
  12: 12,
  15: 15,
  16: 16,
  17: 17,
} as const;

export const HEIGHT = {
  44: 44,
  52: 52,
  56: 56,
} as const;
