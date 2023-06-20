import { useStyleSheet, useTheme } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { slides } from './slides';
import Images from '../../assets/images';
import { Container, Content, Text, VStack } from '../../component';

type Item = (typeof slides)[0];

export const RenderItem = ({ item }: { item: Item }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <StatusBar style="light" />
      <Container style={{ backgroundColor: theme['color-dark-gray'] }}>
        <Content>
          <VStack style={styles.container}>
            <Image source={Images.icon_white} resizeMethod="auto" />
            <Image
              source={item.img}
              style={{ width: '100%', marginTop: 32 }}
              resizeMethod="auto"
            />
            <VStack ph={32} mt={52}>
              <Text category="h1" center bold>
                {item.title}
              </Text>
              <Text center bold marginTop={32}>
                {item.text}
              </Text>
            </VStack>
          </VStack>
        </Content>
      </Container>
    </>
  );
};

const themedStyles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 16,
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
