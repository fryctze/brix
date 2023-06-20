import {
  Layout,
  StyleService,
  ThemeType,
  useTheme,
  withStyles,
} from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Images from '../../assets/images';
import { Text } from '../../component';

const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: Images.intro1,
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: Images.intro2,
    bg: '#febe29',
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: Images.intro1,
    bg: '#22bcb5',
  },
];

type Item = (typeof data)[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export const TestFunc = () => {
  const theme = useTheme();
  return <TestIntro theme={theme} />;
};

interface TestIntroProps {
  theme: ThemeType;
}

class TestIntro extends React.Component<TestIntroProps> {
  slider: AppIntroSlider | undefined;
  _renderItem = ({ item }: { item: Item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          /*renderPagination={this._renderPagination}*/
          bottomButton={true}
          renderNextButton={() => {
            return (
              <Layout
                style={[
                  {
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    justifyContent: 'center',
                    backgroundColor: this.props.theme['color-primary-500'],
                    borderRadius: 12,
                    alignSelf: 'center',
                  },
                ]}>
                <Text
                  category={'h6'}
                  style={{ fontFamily: 'Roboto-Bold', color: '#ffffff' }}>
                  Next
                </Text>
              </Layout>
            );
          }}
          data={data}
          ref={ref => (this.slider = ref!)}
        />
      </View>
    );
  }
}
