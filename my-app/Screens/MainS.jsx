import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function MainS({navigation}){
  return(
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('../Recursos/iconoApp.png')} /> */}
      <TextInput placeholder="Ingrese la URL" style={styles.text}></TextInput>
      <Button
        title='Search URL' 
        onPress={()=>navigation.navigate('ShowDocumentTree')}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 850,
    height: 250,
  },
});