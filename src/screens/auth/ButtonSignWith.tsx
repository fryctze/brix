import { Icon } from '@ui-kitten/components';
import { FC, memo } from 'react';

import { HStack, Text } from '../../component';

interface ButtonSignWithProps {
  provider: 'fb' | 'gg';
  onPress?(): void;
  mb?: number;
  text: string;
}

export const ButtonSignWith: FC<ButtonSignWithProps> = memo(
  ({ provider, onPress, mb, text, ...props }) => {
    return (
      <HStack
        border={1}
        borderRadius={8}
        ph={16}
        pv={12}
        mb={mb}
        onPress={onPress}>
        <Icon name={provider} />
        <Text style={{ flex: 1 }} center>
          {text}
        </Text>
      </HStack>
    );
  },
);
