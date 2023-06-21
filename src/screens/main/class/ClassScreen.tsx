import { memo } from 'react';

import { Container, Content, Text, VStack } from '../../../component';

export const ClassScreen = memo(() => {
  return (
    <Container>
      <Content>
        <VStack
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Class Screen</Text>
        </VStack>
      </Content>
    </Container>
  );
});
