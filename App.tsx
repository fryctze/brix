import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { loadFonts } from './src/assets/fonts/ExpoFonts';
import { default as appTheme } from './src/constant/appTheme.json';
import { default as mapping } from './src/constant/mapping.json';
import { ThemeContext } from './src/provider/theme-context';
import AppContainer from './src/routes/AppContainer';

export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }, [theme]);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadApp = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    loadApp().then(); // Call the loadApp function and use .then() to handle the promise
  }, []);

  if (!fontsLoaded) {
    // Return a loading state or placeholder while fonts are being loaded
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider
          {...eva}
          // @ts-ignore
          customMapping={mapping}
          theme={
            theme === 'light'
              ? { ...eva.light, ...appTheme }
              : { ...eva.dark, ...appTheme }
          }>
          <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
          {/* Container */}
          <AppContainer />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
};
