import { Button, CheckBox, Icon, Input } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import { Container, Content, HStack, Text, VStack } from '../../component';

export const Login = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [agreement, setAgreement] = useState(false);

  const renderIcon = (props): React.ReactElement => (
    <TouchableWithoutFeedback
      onPress={() => setPasswordVisibility(!passwordVisibility)}>
      <Icon {...props} name={passwordVisibility ? 'eye_close' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Container>
      <KeyboardAvoidingView>
        <Content isPadding>
          <VStack itemsCenter pt={40}>
            <Text category={'h1'} marginBottom={24} bold>
              Sign Up
            </Text>
            <Input
              value={name}
              onChangeText={setName}
              placeholder={'Name'}
              style={{ marginBottom: 12 }}
            />
            <Input
              value={grade}
              onChangeText={setGrade}
              placeholder={'Grade'}
              style={{ marginBottom: 12 }}
            />
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder={'Email'}
              style={{ marginBottom: 12 }}
            />
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder={'Password'}
              accessoryRight={renderIcon}
              secureTextEntry={passwordVisibility}
              style={{ marginBottom: 28 }}
            />
            <HStack>
              <CheckBox
                checked={agreement}
                onChange={setAgreement}
                style={{ flex: 1 }}>
                <HStack>
                  <Text>I am agree with all </Text>
                  <TouchableOpacity>
                    <Text status={'primary'}>Terms and Condition</Text>
                  </TouchableOpacity>
                </HStack>
              </CheckBox>
            </HStack>
            <Button
              style={{
                width: '100%',
                borderRadius: 12,
                marginTop: 48,
                marginBottom: 18,
              }}>
              {evaProps => (
                <Text
                  {...evaProps}
                  category={'h6'}
                  bold
                  style={{ color: '#ffffff' }}>
                  SIGN IN
                </Text>
              )}
            </Button>
            <HStack>
              <Text>Already have an account? </Text>
              <TouchableOpacity>
                <Text status={'primary'}>LOGIN</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
