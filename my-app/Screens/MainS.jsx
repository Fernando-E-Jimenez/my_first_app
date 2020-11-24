import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import 'react-native-gesture-handler';

export default function MainS({navigation}){

  const [text, setText] = useState('');

  return(

    <View style={styles.container}>
      <TextInput 
        placeholder="Ingrese la URL" 
        style={styles.text}
        onChangeText={text => setText(text)}
        defaultValue={text}>          
      </TextInput>
      <Button
        title='Search URL'
        style={styles.button} 
        onPress={()=>navigation.navigate('ShowDocumentTree')}>
      </Button>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    width: '80px',
    height: '30px',
  }
});

