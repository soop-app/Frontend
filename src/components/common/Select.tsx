import { Image, type ImageProps } from 'expo-image';
import { Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { COLORS } from '@/constants/colors';

type SelectProps = Omit<PressableProps, 'children' | 'style'> & {
  /** 선택된 값. 없으면 placeholder 표시 */
  value?: string;
  placeholder?: string;
  /** 라벨 왼쪽 아이콘 (예: clock, heart) */
  icon?: ImageProps['source'];
  /** 오른쪽 아이콘. 기본 chevron-down */
  trailingIcon?: ImageProps['source'];
  style?: StyleProp<ViewStyle>;
};

// 피그마 SELECT (드롭다운 트리거). 목록을 여는 동작은 쓰는 화면에서 onPress로 처리
export function Select({
  value,
  placeholder = '선택',
  icon,
  trailingIcon = require('@/assets/icons/chevron-down.svg'),
  style,
  ...rest
}: SelectProps) {
  return (
    <Pressable accessibilityRole="button" style={[styles.base, style]} {...rest}>
      {icon != null && <Image source={icon} tintColor={COLORS.text.muted} style={styles.icon} />}
      <Text style={[styles.label, { color: value ? COLORS.text.primary : COLORS.text.muted }]} numberOfLines={1}>
        {value ?? placeholder}
      </Text>
      <Image source={trailingIcon} tintColor={COLORS.text.muted} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: COLORS.surface.subtle,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: { width: 14, height: 14 },
  // b04 13 · Medium
  label: { flex: 1, fontFamily: 'SUIT-Medium', fontSize: 13 },
});
