import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';

export default function Login(){

  
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
      <Image
        style={styles.logo}
        source={ require('../assets/logoTransp.png')}
      />
      <FlatList 
        data={usuarios}
        renderItem={({item}) => (
          <Text>
            <Text style={styles.titulo}>Name:</Text>
            <Text style={styles.items}> {item.name}</Text> 
            <Text style={styles.titulo}> UserName:</Text>
            <Text style={styles.items}> {item.username}</Text>
            <Text style={styles.titulo}> Email:</Text>
            <Text style={styles.items}> {item.email}</Text>
            <Text style={styles.titulo}> Address: </Text>
            <Text style={styles.titulo}> Street:</Text>
            <Text style={styles.items}> {item.address.street}</Text>
            <Text style={styles.titulo}> City:</Text>
            <Text style={styles.items}> {item.address.city}</Text>
            <Text style={styles.titulo}> ZipCode:</Text>
            <Text style={styles.items}> {item.address.zipcode}</Text>
            
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
    color: 'white',
  },
  logo: {
    width: '100%',
    height: 120,
  },
  titulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  items: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
});