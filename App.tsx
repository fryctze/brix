import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { default as customTheme } from './src/constant/appTheme.json';
import { ThemeContext } from './src/provider/theme-context';

export default () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const toggleTheme = React.useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }, [theme]);

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider
          {...eva}
          theme={
            theme === 'light'
              ? { ...eva.light, ...customTheme }
              : { ...eva.dark, ...customTheme }
          }>
          <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
          {/* Container */}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};
