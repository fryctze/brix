import { useStyleSheet } from '@ui-kitten/components';
import { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

import { ActionBar } from './ActionBar';
import { ItemMenuList } from './ItemMenuList';
import Images from '../../../assets/images';
import { Container, Content, HStack, Text, VStack } from '../../../component';

export const HomeScreen = memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container>
      <ActionBar />
      <Content
        isPadding
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        {/* Start Top Card */}
        <VStack style={styles.topCardContainer}>
          <HStack style={styles.topCardMainContainer}>
            <VStack style={styles.topCardMainTextContainer}>
              <VStack style={styles.topCardMainTopTextContainer}>
                <Text category={'h5'} bold style={styles.topCardMainText}>
                  Bahasa Jerman
                </Text>
                <Text style={styles.topCardMainText}>12 Bahasa</Text>
              </VStack>
              <Text style={styles.topCardMainText}>
                Dr. Desti Nur Aini, S.S. M.Pd.
              </Text>
            </VStack>
            <Image
              source={Images.phone}
              resizeMode={'contain'}
              style={styles.topCardImage}
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

const themedStyles = StyleSheet.create({
  scrollView: { height: '100%' },
  scrollContent: { flexGrow: 1 },
  topCardContainer: { backgroundColor: 'color-basic-300', borderRadius: 16 },
  topCardMainContainer: {
    height: 200,
    backgroundColor: 'color-primary-default',
    borderRadius: 16,
    padding: 16,
  },
  topCardMainTextContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  topCardMainTopTextContainer: { flex: 1, justifyContent: 'flex-start' },
  topCardMainText: { color: 'text-alternate-color' },
  topCardImage: {
    height: 200,
    width: 200,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -40,
    zIndex: -100,
  },
});
