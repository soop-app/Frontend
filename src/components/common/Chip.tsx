import { Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { COLORS } from '@/constants/colors';

type ChipProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
};

// 피그마 Bora/Chip (CATEGORY: Default · Selected)
export function Chip({ label, selected = false, style, ...rest }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={[styles.base, selected && styles.selected, style]}
      {...rest}
    >
      <Text style={[styles.label, { color: selected ? COLORS.brand.strong : COLORS.text.secondary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 34,
    paddingHorizontal: 16,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: COLORS.surface.subtle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: { backgroundColor: COLORS.brand.soft, borderColor: COLORS.border.brandSoft },
  // b05 12 · Medium
  label: { fontFamily: 'SUIT-Medium', fontSize: 12, lineHeight: 18 },
});
