import { Divider, DividerProps, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

import { HStack, Text } from '../../component';

interface CustomDividerProps extends DividerProps {
  text: string;
  style?: ViewStyle;
}

export const CustomDivider = ({ text, style, ...rest }: CustomDividerProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <HStack style={styles.container}>
      <Divider {...rest} style={[styles.divider, style]} />
      <View style={styles.textContainer}>
        <Text category={'h5'} style={styles.text}>
          {text}
        </Text>
      </View>
    </HStack>
  );
};

const themedStyles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 28,
  },
  divider: {
    height: 2,
    flex: 1,
    backgroundColor: 'color-basic-1100',
  },
  textContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 16,
    backgroundColor: 'color-basic-100',
  },
});
