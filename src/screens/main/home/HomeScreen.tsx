import { useStyleSheet } from '@ui-kitten/components';
import { memo } from 'react';
import { Image, SectionList, StyleSheet } from 'react-native';

import { ActionBar } from './ActionBar';
import ItemMenuList from './ItemMenuList';
import Images from '../../../assets/images';
import { Container, HStack, Text, VStack } from '../../../component';
import keyExtractorSection from '../../../utils/keyExtractorSection';

export const HomeScreen = memo(() => {
  const styles = useStyleSheet(themedStyles);

  const header = () => {
    return (
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
    );
  };

  return (
    <Container>
      <ActionBar />
      <SectionList
        keyExtractor={keyExtractorSection}
        ListHeaderComponent={header}
        renderItem={({ item }) => <ItemMenuList item={item} />}
        sections={LIST_SECTION}
        renderSectionHeader={({ section: { head } }) => (
          <>
            {head === undefined ? (
              ''
            ) : (
              <Text bold style={{ marginTop: 8 }} center category={'h6'}>
                {head}
              </Text>
            )}
          </>
        )}
      />
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

const LIST_TOP = [
  {
    title: 'Daily Challenge',
    desc: 'Finish the challenge to get more points!',
    img: Images.hand_study,
    goto: 'Quiz',
  },
];

const LIST_MID = [
  {
    title: 'Exercise',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    img: Images.desk_objects,
    goto: 'Class',
  },
  {
    title: 'Review you study',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    img: Images.study_on_books,
    goto: 'Chat',
  },
];

const LIST_SECTION = [
  {
    head: undefined,
    data: LIST_TOP,
  },
  {
    head: 'What do you want?',
    data: LIST_MID,
  },
];
