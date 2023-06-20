import { Layout, useStyleSheet } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { RenderItem } from './RenderItem';
import { slides } from './slides';
import { Text } from '../../component';
import { ThemeContext } from '../../provider/theme-context';
import { ChooseUserSignScreen } from '../auth/ChooseUserSignScreen';
import { Register } from '../auth/Register';

export const Intro = () => {
  const themeContext = useContext(ThemeContext);
  const styles = useStyleSheet(themedStyles);

  function changeTheme() {
    themeContext.toggleTheme('dark');
  }

  useEffect(() => {
    changeTheme();
  }, []);

  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return <RenderItem item={item} />;
  };

  return (
    <>
      {showRealApp ? (
        <ChooseUserSignScreen />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={_renderItem}
          onDone={() => setShowRealApp(true)}
          renderNextButton={() => {
            return (
              <Layout style={styles.nextButton}>
                <Text
                  category={'h6'}
                  style={{ fontFamily: 'Roboto-Bold', color: '#ffffff' }}>
                  Next
                </Text>
              </Layout>
            );
          }}
          renderDoneButton={() => {
            return (
              <Layout style={styles.nextButton}>
                <Text
                  category={'h6'}
                  style={{ fontFamily: 'Roboto-Bold', color: '#ffffff' }}>
                  Done
                </Text>
              </Layout>
            );
          }}
        />
      )}
    </>
  );
};

const themedStyles = StyleSheet.create({
  nextButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    backgroundColor: 'color-primary-500',
    borderRadius: 12,
    alignSelf: 'center',
  },
});
