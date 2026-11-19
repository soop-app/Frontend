import type { TextStyle } from 'react-native';

// 피그마 디자인 시스템 02 · 타이포그래피 (SUIT 텍스트 스타일 47개)
// 사용: <Text style={TYPOGRAPHY.b04.medium}>  /  [TYPOGRAPHY.h01.extraBold, { color: COLORS.text.primary }]
// 줄 간격이 피그마에서 Auto인 스타일은 lineHeight를 지정하지 않음

// useFonts에 등록한 이름 (src/app/_layout.tsx)
export const FONT = {
  regular: 'SUIT-Regular',
  medium: 'SUIT-Medium',
  semiBold: 'SUIT-SemiBold',
  bold: 'SUIT-Bold',
  extraBold: 'SUIT-ExtraBold',
  heavy: 'SUIT-Heavy',
} as const;

type Weight = keyof typeof FONT;

const text = (weight: Weight, fontSize: number, extra?: TextStyle): TextStyle => ({
  fontFamily: FONT[weight],
  fontSize,
  ...extra,
});

export const TYPOGRAPHY = {
  // HEADING
  h01: {
    extraBold: text('extraBold', 34, { lineHeight: 41 }),
    bold: text('bold', 34, { lineHeight: 41 }),
  },
  h02: { regular: text('regular', 30) },
  h03: { extraBold: text('extraBold', 29), bold: text('bold', 29) },
  h04: { extraBold: text('extraBold', 28), bold: text('bold', 28) },
  h05: { regular: text('regular', 27) },
  h06: { extraBold: text('extraBold', 24), bold: text('bold', 24) },
  h07: { extraBold: text('extraBold', 23), bold: text('bold', 23), regular: text('regular', 23) },
  h08: { bold: text('bold', 22), regular: text('regular', 22) },
  h09: { extraBold: text('extraBold', 21), bold: text('bold', 21) },
  h10: { bold: text('bold', 20), regular: text('regular', 20) },
  h11: { regular: text('regular', 19) },
  h12: { bold: text('bold', 18) },

  // BODY
  b01: { bold: text('bold', 16) },
  b02: { bold: text('bold', 15), medium: text('medium', 15) },
  b03: { bold: text('bold', 14), medium: text('medium', 14), regular: text('regular', 14) },
  b04: {
    bold: text('bold', 13),
    semiBold: text('semiBold', 13),
    medium: text('medium', 13),
    regular: text('regular', 13),
  },
  b05: { bold: text('bold', 12), medium: text('medium', 12), regular: text('regular', 12) },

  // CAPTION
  cap01: { bold: text('bold', 11), medium: text('medium', 11), regular: text('regular', 11) },
  cap02: {
    heavy: text('heavy', 10),
    extraBold: text('extraBold', 10),
    bold: text('bold', 10),
    medium: text('medium', 10),
    regular: text('regular', 10),
  },
  cap03: { regular: text('regular', 9) },
  cap04: { bold: text('bold', 8) },

  // 개별 설정
  /** B 05-r · 행간18 */
  b05RegularLh18: text('regular', 12, { lineHeight: 18 }),
  /** cap 02-b · 자간2 */
  cap02BoldTracking2: text('bold', 10, { letterSpacing: 2 }),
  /** cap 02-m · 자간2 · 대문자 */
  cap02ExtraBoldTracking2Upper: text('extraBold', 10, { letterSpacing: 2, textTransform: 'uppercase' }),
} as const;
