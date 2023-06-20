import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, useStyleSheet } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { ReactElement, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { ButtonSignWith } from './ButtonSignWith';
import { CustomDivider } from './CustomDivider';
import { Logo } from './Logo';
import { Container, Content, HStack, Text, VStack } from '../../component';
import { RootStackParamList } from '../../routes/navigation-types';

export const Login = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const renderIcon = (props): ReactElement => (
    <TouchableWithoutFeedback
      onPress={() => setPasswordVisibility(!passwordVisibility)}>
      <Icon {...props} name={passwordVisibility ? 'eye_close' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Container>
      <KeyboardAvoidingView>
        <Content
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}>
          <VStack ph={32} pt={40} style={styles.content}>
            <VStack>
              <Text category={'h3'} marginBottom={24} bold center>
                Login
              </Text>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder={'Email'}
                style={styles.inputField}
              />
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder={'Password'}
                accessoryRight={renderIcon}
                secureTextEntry={passwordVisibility}
                style={styles.inputField}
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text status={'primary'} category={'label'}>
                  forgot password?
                </Text>
              </TouchableOpacity>
              <Button style={styles.buttonSign}>
                {evaProps => (
                  // @ts-ignore
                  <Text
                    {...evaProps}
                    category={'h6'}
                    bold
                    style={styles.buttonText}>
                    Login
                  </Text>
                )}
              </Button>
              <HStack alignSelfCenter>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Register');
                  }}>
                  <Text status={'primary'} bold>
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </HStack>

              <CustomDivider text={'OR'} />

              <ButtonSignWith
                text={'Sign in with Facebook'}
                provider={'gg'}
                mb={8}
              />
              <ButtonSignWith text={'Sign in with Facebook'} provider={'fb'} />
            </VStack>

            <Logo />
          </VStack>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

const themedStyles = StyleSheet.create({
  scrollView: { height: '100%' },
  scrollContent: { flexGrow: 1 },
  content: { flex: 1 },
  inputField: { marginBottom: 12 },
  forgotPassword: { alignSelf: 'flex-end' },
  buttonSign: {
    flex: 1,
    borderRadius: 12,
    marginTop: 36,
    marginBottom: 18,
  },
  buttonText: {
    color: 'text-alternate-color',
  },
});
