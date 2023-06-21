import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  useTheme,
} from '@ui-kitten/components';
import { memo, useState } from 'react';
import { Image } from 'react-native';

import { ActionBar } from './ActionBar';
import { ItemMenuList } from './ItemMenuList';
import Images from '../../../assets/images';
import { Container, Content, HStack, Text, VStack } from '../../../component';

export const HomeScreen = memo(() => {
  const theme = useTheme();
  return (
    <Container>
      <ActionBar />
      <Content
        isPadding
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}>
        {/* Start Top Card */}
        <VStack
          style={{
            backgroundColor: theme['color-basic-300'],
            borderRadius: 16,
          }}>
          <HStack
            style={{
              height: 200,
              backgroundColor: theme['color-primary-default'],
              borderRadius: 16,
              padding: 16,
            }}>
            <VStack
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
              }}>
              <VStack style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text
                  category={'h5'}
                  bold
                  style={{ color: theme['text-alternate-color'] }}>
                  Bahasa Jerman
                </Text>
                <Text style={{ color: theme['text-alternate-color'] }}>
                  12 Bahasa
                </Text>
              </VStack>
              <Text style={{ color: theme['text-alternate-color'] }}>
                Dr. Desti Nur Aini, S.S. M.Pd.
              </Text>
            </VStack>
            <Image
              source={Images.phone}
              resizeMode={'contain'}
              style={{
                height: 200,
                width: 200,
                alignSelf: 'flex-end',
                position: 'absolute',
                right: -40,
                zIndex: -100,
              }}
            />
          </HStack>
          <HStack pv={8} ph={16}>
            <VStack>
              <Text bold>Tugas baru:</Text>
              <Text bold category={'h6'}>
                PROYEK/TUGAS VIDEO
              </Text>
            </VStack>
            <VStack itemsCenter alignSelfCenter>
              <Text category={'c2'}>Batas akhir</Text>
              <Text category={'c2'} status={'primary'}>
                31 Mei
              </Text>
            </VStack>
          </HStack>
        </VStack>
        {/* End Top card */}
        <ItemMenuList />
        <Text bold style={{ marginTop: 8 }} center category={'h6'}>
          What do you want?
        </Text>
        <ItemMenuList />
        <ItemMenuList />
      </Content>
    </Container>
  );
});
