import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Login({navigation}, text){

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    setUsuarios(users)
  }

  return(
    <View style={styles.container}>
      <ul>
        {
          usuarios.map(item => (
            <li key={item.id}>{item.name} - {item.email}</li>
          ))
        }
      </ul>
      <Button
        title='Back' 
        onPress={()=>this.navigation.navigate('MainS')}>
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