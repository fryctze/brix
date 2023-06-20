import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Button,
  CheckBox,
  Icon,
  Input,
  useStyleSheet,
} from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { ReactElement, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Logo } from './Logo';
import { Container, Content, HStack, Text, VStack } from '../../component';
import { RootStackParamList } from '../../routes/navigation-types';

export const Register = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [agreement, setAgreement] = useState(false);

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
                Sign Up
              </Text>
              <Input
                value={name}
                onChangeText={setName}
                placeholder={'Name'}
                style={styles.inputField}
              />
              <Input
                value={grade}
                onChangeText={setGrade}
                placeholder={'Grade'}
                style={styles.inputField}
              />
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
              <HStack>
                <CheckBox
                  checked={agreement}
                  onChange={setAgreement}
                  style={styles.checkBox}>
                  <HStack>
                    <Text>I am agree with all </Text>
                    <TouchableOpacity>
                      <Text status={'primary'}>Terms and Condition</Text>
                    </TouchableOpacity>
                  </HStack>
                </CheckBox>
              </HStack>
              <Button style={styles.buttonSign}>
                {evaProps => (
                  // @ts-ignore
                  <Text
                    {...evaProps}
                    category={'h6'}
                    bold
                    style={styles.buttonText}>
                    SIGN IN
                  </Text>
                )}
              </Button>
              <HStack alignSelfCenter>
                <Text>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text status={'primary'} bold>
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </HStack>
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
  checkBox: { flex: 1 },
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
