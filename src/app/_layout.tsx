import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // 디자인 시스템 기본 글꼴 SUIT. 키 이름 = 컴포넌트에서 쓰는 fontFamily
  const [fontsLoaded, fontError] = useFonts({
    'SUIT-Regular': require('@/assets/fonts/SUIT-Regular.otf'),
    'SUIT-Medium': require('@/assets/fonts/SUIT-Medium.otf'),
    'SUIT-SemiBold': require('@/assets/fonts/SUIT-SemiBold.otf'),
    'SUIT-Bold': require('@/assets/fonts/SUIT-Bold.otf'),
  });

  // 폰트 로딩 중에는 스플래시 유지 (AnimatedSplashOverlay가 렌더되면서 스플래시를 숨김)
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
