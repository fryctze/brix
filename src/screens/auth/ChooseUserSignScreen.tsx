import { useStyleSheet } from '@ui-kitten/components';
import { useContext, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

import Images from '../../assets/images';
import { Container, HStack, VStack, Text, Content } from '../../component';
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
    <Container>
      <Content
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        <VStack style={styles.content} ph={32} pt={18}>
          <VStack style={{ alignItems: 'center' }}>
            <Image
              source={Images.icon}
              resizeMethod="auto"
              resizeMode={'contain'}
              style={{
                marginBottom: 24,
                width: 50,
              }}
            />
            <Text category={'h3'} bold>
              Sign in / Sign up
            </Text>
            <Text category={'h3'} bold>
              As
            </Text>
            <HStack style={{ justifyContent: 'center' }} mt={40}>
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
          </VStack>

          <Image
            source={Images.icon_small}
            style={{ alignSelf: 'center', marginBottom: 32 }}
          />
        </VStack>
      </Content>
    </Container>
  );
};

const themedStyles = StyleSheet.create({
  scrollView: { height: '100%' },
  scrollContent: { flexGrow: 1 },
  content: { flex: 1 },
  ButtonLayout: {
    flex: 1,
    alignItems: 'center',
  },
  ButtonImage: { height: 140, width: 140, marginBottom: 8 },
});
