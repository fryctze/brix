import { Layout, useTheme } from '@ui-kitten/components';
import { memo } from 'react';
import { Image } from 'react-native';

import Images from '../../../assets/images';
import { HStack, Text, VStack } from '../../../component';

export const ItemMenuList = memo(() => {
  const theme = useTheme();

  return (
    <HStack
      mt={8}
      style={{
        backgroundColor: theme['color-basic-300'],
        borderRadius: 16,
        paddingEnd: 16,
      }}>
      <Image source={Images.desk_objects} style={{ width: 100, height: 100 }} />
      <VStack style={{ flex: 1 }} mv={8} alignSelfCenter>
        <Text category={'h6'} bold>
          Daily Challenge
        </Text>
        <Text>
          Finish the challenge to get <Text>more</Text> points!
        </Text>
      </VStack>
      <Layout
        style={{
          borderRadius: 16,
          backgroundColor: theme['color-primary-default'],
          paddingVertical: 6,
          paddingHorizontal: 12,
          alignSelf: 'center',
        }}>
        <Text
          style={{ color: theme['text-alternate-color'] }}
          bold
          category={'label'}>
          Let's Go!
        </Text>
      </Layout>
    </HStack>
  );
});
