import React, {useState, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {AuthContext} from '../../contexts/auth';

import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './style';

export default function Login() {
  const {signIn, signUp, loadingAuth} = useContext(AuthContext);

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //function that changes the login state of logging in to creating an account
  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    if (email === '' || password === '') {
      console.log('Preencha todos os campos');
      return;
    }

    signIn(email, password);
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos!');
      return;
    }
    // Register user
    signUp(email, password, name);
  }

  if (login) {
    return (
      //when the user already has an account
      <Container>
        <Title>
          Use me
          <Text style={{color: '#FF4500'}}> App</Text>
        </Title>

        <Input
          placeholder="email@gmail.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="********"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
        </Button>

        <SignUpButton
          onPress={() => {
            toggleLogin();
          }}>
          <SignUpText>Criar uma conta.</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    //when the user does not have an account
    <Container>
      <Title>
        Use me
        <Text style={{color: '#FF4500'}}> App</Text>
      </Title>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Input
        placeholder="email@gmail.com"
        secureTextEntry={false}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Input
        placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#FFF" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <SignUpButton
        onPress={() => {
          toggleLogin();
        }}>
        <SignUpText>Já tenho uma conta.</SignUpText>
      </SignUpButton>
    </Container>
  );
}
