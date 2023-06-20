import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { ReactElement, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ButtonSignWith } from './ButtonSignWith';
import { CustomDivider } from './CustomDivider';
import Images from '../../assets/images';
import { Container, Content, HStack, Text, VStack } from '../../component';

export const Login = () => {
  const theme = useTheme();
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
              <Button style={styles.buttonLogin}>
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
                <TouchableOpacity>
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

            <Image source={Images.icon_small} style={styles.logo} />
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
  buttonLogin: {
    flex: 1,
    borderRadius: 12,
    marginTop: 36,
    marginBottom: 18,
  },
  buttonText: {
    color: 'text-alternate-color',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 32,
  },
});
