import { memo } from 'react';
import { Image } from 'react-native';

import Images from '../../../assets/images';
import { HStack, Text, VStack } from '../../../component';

export const ActionBar = memo(() => {
  return (
    <HStack padder pv={16} itemsCenter>
      <VStack style={{ flex: 1 }}>
        <HStack style={{ justifyContent: 'flex-start' }}>
          <Text category={'h4'} bold>
            Welcome,
          </Text>
          <Text category={'h4'} bold status={'primary'}>
            Yovika
          </Text>
        </HStack>
        <Text>Student of 12 Bahasa, SMAN 1 Bululawang</Text>
      </VStack>
      <Image
        resizeMode={'cover'}
        source={Images.ex_profile_img}
        blurRadius={0}
        style={{ height: 60, width: 60, borderRadius: 30 }}
      />
    </HStack>
  );
});
