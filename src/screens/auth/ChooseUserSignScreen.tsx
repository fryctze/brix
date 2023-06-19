import { useStyleSheet } from '@ui-kitten/components';
import { useContext, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

import Images from '../../assets/images';
import { Container, HStack, VStack, Text } from '../../component';
import { ThemeContext } from '../../provider/theme-context';

export const ChooseUserSignScreen = () => {
  const themeContext = useContext(ThemeContext);
  const styles = useStyleSheet(themedStyles);

  function changeTheme() {
    themeContext.toggleTheme('light');
  }

  useEffect(() => {
    changeTheme();
  }, []);

  return (
    <Container style={{ flex: 1, alignSelf: 'stretch' }}>
      <VStack style={{ alignItems: 'center' }} padder={true}>
        <Image
          source={Images.icon}
          resizeMethod="auto"
          style={{ marginVertical: 32 }}
        />
        <Text category={'h1'} bold>
          Sign in / Sign up
        </Text>
        <Text category={'h1'} bold>
          As
        </Text>
        <HStack style={{ justifyContent: 'center' }} mt={32}>
          <VStack
            style={styles.ButtonLayout}
            onPress={() => {
              console.log('teacher');
            }}>
            <Image
              source={Images.teacher}
              style={styles.ButtonImage}
              resizeMethod="auto"
            />
            <Text bold category={'h6'}>
              Teacher
            </Text>
          </VStack>
          <VStack
            style={styles.ButtonLayout}
            onPress={() => {
              console.log('student');
            }}>
            <Image
              source={Images.student}
              style={styles.ButtonImage}
              resizeMethod="auto"
            />
            <Text bold category={'h6'}>
              Student
            </Text>
          </VStack>
        </HStack>
        <HStack style={{ height: 300 }}>
          <Image source={Images.icon_small} style={{ alignSelf: 'flex-end' }} />
        </HStack>
      </VStack>
    </Container>
  );
};

const themedStyles = StyleSheet.create({
  ButtonLayout: {
    flex: 1,
    alignItems: 'center',
  },
  ButtonImage: { height: 150, width: 150 },
});
