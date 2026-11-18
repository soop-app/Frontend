import { Image, type ImageProps } from 'expo-image';
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { COLORS } from '@/constants/colors';

type ButtonTone = 'primary' | 'secondary';

type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  tone?: ButtonTone;
  /** 라벨 왼쪽 아이콘. assets/icons/*.svg를 require로 넘기면 라벨 색으로 칠해짐 */
  icon?: ImageProps['source'];
  /** 너비·flex 등 배치용 */
  style?: StyleProp<ViewStyle>;
};

// 피그마 Bora/Button 계열 (기본 · 아이콘형 · 이전/다음 · 지도/제외)
export function Button({ label, tone = 'primary', icon, disabled, style, ...rest }: ButtonProps) {
  const isPrimary = tone === 'primary';
  const color = isPrimary ? COLORS.surface.white : disabled ? COLORS.text.secondary : COLORS.text.primary;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        pressed && (isPrimary ? styles.primaryPressed : styles.secondaryPressed),
        disabled && (isPrimary ? styles.primaryDisabled : styles.secondaryDisabled),
        style,
      ]}
      {...rest}
    >
      {icon != null && <Image source={icon} tintColor={color} style={styles.icon} />}
      <Text style={[styles.label, { color }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primary: { backgroundColor: COLORS.brand.primary },
  primaryPressed: { backgroundColor: COLORS.brand.strong },
  // CLAUDE.md: 비활성은 brand.primary + 50% 투명도
  primaryDisabled: { opacity: 0.5 },
  secondary: {
    backgroundColor: COLORS.surface.white,
    borderWidth: 1,
    borderColor: COLORS.border.default,
  },
  secondaryPressed: { backgroundColor: COLORS.brand.soft, borderColor: COLORS.border.selected },
  secondaryDisabled: { backgroundColor: COLORS.surface.subtle, borderColor: COLORS.border.default },
  icon: { width: 18, height: 18 },
  // b02 15 · Bold
  label: { fontFamily: 'SUIT-Bold', fontSize: 15, lineHeight: 22.5 },
});
