import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Login({navigation}){
  return(
    <View style={styles.container}>
      <FlatList></FlatList>
      <Button
        title='Back' 
        onPress={()=>navigation.navigate('MainS')}>
      </Button>
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