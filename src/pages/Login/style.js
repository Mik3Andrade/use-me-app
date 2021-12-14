import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #483d8b;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 40px;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #eee;
  padding: 10px;
  margin-top: 10px;
  border-radius: 7px;
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #418cfd;
  padding: 10px;
  margin-top: 10px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const SignUpText = styled.Text`
  color: #ddd;
  font-size: 15px;
`;
