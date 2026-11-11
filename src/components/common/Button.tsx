import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { COLORS } from '@/constants/colors';

type ButtonTone = 'primary' | 'secondary';

type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  tone?: ButtonTone;
};

// 피그마 Bora/Button (Tone × State: Default / Pressed / Disabled)
export function Button({ label, tone = 'primary', disabled, ...rest }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        tone === 'primary' ? styles.primary : styles.secondary,
        pressed && (tone === 'primary' ? styles.primaryPressed : styles.secondaryPressed),
        disabled && (tone === 'primary' ? styles.primaryDisabled : styles.secondaryDisabled),
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.label,
          { color: tone === 'primary' ? COLORS.surface.white : COLORS.text.primary },
          disabled && { color: COLORS.text.secondary },
        ]}
        numberOfLines={1}
      >
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
    gap: 8,
  },
  primary: { backgroundColor: COLORS.brand.secondary },
  primaryPressed: { backgroundColor: COLORS.brand.strong },
  primaryDisabled: { backgroundColor: COLORS.surface.subtle },
  secondary: {
    backgroundColor: COLORS.surface.white,
    borderWidth: 1,
    borderColor: COLORS.border.default,
  },
  secondaryPressed: { backgroundColor: COLORS.brand.soft, borderColor: COLORS.border.selected },
  secondaryDisabled: { backgroundColor: COLORS.surface.subtle, borderColor: COLORS.border.default },
  // b02 15 · Medium · 행간 1.5
  label: { fontFamily: 'SUIT-Medium', fontSize: 15, lineHeight: 22.5 },
});
