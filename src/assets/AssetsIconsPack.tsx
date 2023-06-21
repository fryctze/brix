import { IconPack, IconProvider } from '@ui-kitten/components';
import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Icons } from './icons';

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: props => (
      <Image
        style={styles.icon}
        {...props}
        source={source}
        resizeMode="cover"
      />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AssetsIconsPack: IconPack<ImageProps | SvgProps> = {
  name: 'assets',
  icons: {
    eye: createIcon(Icons.eye),
    eye_close: createIcon(Icons.eye_close),
    fb: createIcon(Icons.fb),
    gg: createIcon(Icons.gg),

    home: createIcon(Icons.home),
    class_icon: createIcon(Icons.class_icon),
    chat: createIcon(Icons.chat),
    quiz: createIcon(Icons.quiz),
    profile: createIcon(Icons.profile),
  },
};
export default AssetsIconsPack;
