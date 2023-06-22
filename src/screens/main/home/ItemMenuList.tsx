import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Layout, useTheme } from '@ui-kitten/components';
import { memo } from 'react';
import { Image } from 'react-native';

import { HStack, Text, VStack } from '../../../component';
import { RootStackParamList } from '../../../routes/navigation-types';

export interface ItemMenuProps {
  title: string;
  desc: any;
  img: any;
  goto: any;
}

const ItemMenuList = memo(({ item }: { item: ItemMenuProps }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <HStack
      onPress={() => {
        navigation.navigate('Main', { screen: item.goto } as any);
      }}
      mt={8}
      style={{
        backgroundColor: theme['color-basic-300'],
        borderRadius: 16,
        paddingEnd: 16,
      }}>
      <Image source={item.img} style={{ width: 100, height: 100 }} />
      <VStack style={{ flex: 1 }} mv={8} alignSelfCenter>
        <Text category={'h6'} bold>
          {item.title}
        </Text>
        <Text children={item.desc} />
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
export default ItemMenuList;
