import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Image } from 'react-native';
import 'react-native-gesture-handler';

export default function MainS({navigation}){

  const [text, setText] = useState('');

  return(

    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logoTransp.png')}
      />
      <TextInput 
        placeholder="Ingrese la URL" 
        style={styles.text}
        onChangeText={text => setText(text)}
        defaultValue={''}
        clearTextOnFocus>          
      </TextInput>
      <Button
        title='Search URL'
        style={styles.button} 
        onPress={() => {
          let minus = text.toLowerCase();
          if (minus === 'https://run.mocky.io/v3/c22a2d75-a927-4e9b-bbc5-6ac10aa15a26') {
            navigation.navigate('ShowDocumentTree');
          } else {
            Alert.alert('Por favor ingrese a: "https://run.mocky.io/v3/c22a2d75-a927-4e9b-bbc5-6ac10aa15a26"');
          }
        }}>
      </Button>
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
    marginBottom: 50,
    backgroundColor: 'white',
    color: 'black',
    width: '80%',
  },
  logo: {
    position: 'absolute',
    width: '100%',
    height: 120,
    top: 20,
  },
});