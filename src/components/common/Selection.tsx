import { Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { COLORS } from '@/constants/colors';

type SelectionProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
};

// 피그마 Bora/Selection (선택 박스: Default · Selected)
export function Selection({ label, selected = false, style, ...rest }: SelectionProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      style={[styles.base, selected && styles.selected, style]}
      {...rest}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.border.default,
    backgroundColor: COLORS.surface.white,
    justifyContent: 'center',
  },
  selected: { borderColor: COLORS.border.selected, backgroundColor: COLORS.surface.selected },
  // b03 14
  label: { fontFamily: 'SUIT-Regular', fontSize: 14, lineHeight: 21, color: COLORS.text.primary },
});
