import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

export default function Login(text){

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    setUsuarios(users);
  };

  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={usuarios}
        renderItem={({item}) => (
          <Text>
            <Text> Id: {item.id}</Text>
            <Text> Nombre: {item.name}</Text>
            <Text> Username: {item.username}</Text>
            <Text> Email: {item.email}</Text>
            <Text> Address: </Text>
            <Text> Street: {item.address.street}</Text>
            <Text> City: {item.address.city}</Text>
            <Text> Zipcode: {item.address.zipcode}</Text>
          </Text>
        )}
      />
    </SafeAreaView>
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
});