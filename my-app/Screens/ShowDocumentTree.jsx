import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Login(){

  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();
    setUsuarios(users);
  };

  return(
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logoTransp.png')}
      />
      <FlatList 
        data={usuarios}
        renderItem={({item}) => (
          <ScrollView style={styles.scroll}>
            <Text style={styles.titulo}> ----------------------------------------------------</Text>
            <Text style={styles.titulo}>ID: {item.id}</Text>
            <Text style={styles.titulo}> ----------------------------------------------------</Text>
            <Text style={styles.titulo}>Name: {item.name}</Text>
            <Text style={styles.titulo}> UserName: {item.username}</Text>
            <Text style={styles.titulo}> Email: {item.email}</Text>
            <Text style={styles.titulo}> Address: </Text>
            <Text style={styles.titulo}> Street: {item.address.street}</Text>
            <Text style={styles.titulo}> City: {item.address.city}</Text>
            <Text style={styles.titulo}> ZipCode: {item.address.zipcode}</Text>
          </ScrollView>
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
    fontStyle: 'italic',
  },
  items: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
});