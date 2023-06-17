import { Button } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { memo, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';

import Images from '../assets/images';
import { Container, VStack, Text, Content } from '../component';
import { ThemeContext } from '../provider/theme-context';

export const IntroScreen = memo(() => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Content>
          <VStack style={styles.container}>
            <Image source={Images.icon_white} resizeMethod="auto" />
            <Image
              source={Images.intro1}
              style={{ width: '100%' }}
              resizeMethod="auto"
            />
            <VStack ph={32}>
              <Text category="label" bold>
                Make Learning Easy and Fun
              </Text>
              <Text category="h1" bold>
                Make Learning Easy and Fun
              </Text>
              <Text center bold>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </Text>
            </VStack>
          </VStack>
        </Content>

        <Button
          style={{ position: 'absolute', bottom: 32 }}
          onPress={toggleTheme}>
          {/* {evaProps => <Text {...evaProps} category={'h6'} style={{fontFamily: "Roboto-Bold"}}> */}
          Next
          {/* </Text>} */}
        </Button>
        <Button
          style={{ position: 'absolute', bottom: 32, right: 0 }}
          onPress={toggleTheme}>
          {/* {evaProps => <Text {...evaProps} category={'h6'} style={{fontFamily: "Roboto-Bold"}}> */}
          Light
          {/* </Text>} */}
        </Button>
      </Container>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
