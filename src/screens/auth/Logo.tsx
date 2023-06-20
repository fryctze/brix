import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

import Images from '../../assets/images';

interface LogoProps {
  h?: number;
}

export const Logo = memo(({ h }: LogoProps) => {
  return (
    <Image
      source={Images.icon}
      resizeMode={'contain'}
      style={{
        alignSelf: 'center',
        marginVertical: 32,
        height: h ? h : 25,
      }}
    />
  );
});
