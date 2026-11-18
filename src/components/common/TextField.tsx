import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

import { COLORS } from '@/constants/colors';

type TextFieldProps = TextInputProps & {
  /** 있으면 Error 상태 (빨간 테두리 + 아래 메시지) */
  errorMessage?: string;
};

// 피그마 Bora/TextField (Default · Filled · Focused · Error)
export function TextField({ errorMessage, style, onFocus, onBlur, ...rest }: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const borderColor = errorMessage
    ? COLORS.border.error
    : focused
      ? COLORS.border.selected
      : COLORS.border.default;

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={COLORS.text.secondary}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={[styles.input, { borderColor }, style]}
        {...rest}
      />
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  input: {
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: COLORS.surface.white,
    color: COLORS.text.primary,
    fontFamily: 'SUIT-Regular',
    fontSize: 14,
  },
  // b05 12
  error: { fontFamily: 'SUIT-Regular', fontSize: 12, lineHeight: 18, color: COLORS.text.primary },
});
