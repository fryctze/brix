import { Image, StyleSheet } from 'react-native';

import Images from '../../assets/images';
import { Container, HStack, VStack, Text } from '../../component';

export const ChooseUserSignScreen = () => {
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

const styles = StyleSheet.create({
  ButtonLayout: {
    flex: 1,
    alignItems: 'center',
  },
  ButtonImage: { height: 150, width: 150 },
});
