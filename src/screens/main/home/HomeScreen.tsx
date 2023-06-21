import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { memo, useState } from 'react';

import { Container, Content, Text, VStack } from '../../../component';

export const HomeScreen = memo(() => {
  return (
    <Container>
      <Content>
        <VStack
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home desu</Text>
        </VStack>
      </Content>
    </Container>
  );
});
