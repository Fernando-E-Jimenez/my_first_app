import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Login(){

  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://run.mocky.io/v3/c22a2d75-a927-4e9b-bbc5-6ac10aa15a26')
    const users = await data.json();
    setUsuarios(users);
  };
  // fetch('https://run.mocky.io/v3/c22a2d75-a927-4e9b-bbc5-6ac10aa15a26')
  //   .then( resp => resp.json() )
  //   .then( setUsuarios(usuarios));


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
            <Text style={styles.titulo}>Type: {item.type}</Text>
            <Text style={styles.titulo}>Name: {item.name}</Text>
            <Text style={styles.titulo}>    Files[0]: </Text>
            <Text style={styles.titulo}>    Type Files: {item.files[0].type}</Text>
            <Text style={styles.titulo}>    Name Files: {item.files[0].name}</Text>
            {/* <Text style={styles.titulo}>      Files[0.0]: </Text>
            <Text style={styles.titulo}>      Type Files: {item.files[0].files[0].type}</Text>
            <Text style={styles.titulo}>      Name Files: {item.files[0].files[0].name}</Text>
            <Text style={styles.titulo}>      Name Files: {item.files[0].files[0].files[0]}</Text> */}
            <Text style={styles.titulo}>    Files[1]: </Text>
            <Text style={styles.titulo}>    Type Files: {item.files[1].type}</Text>
            <Text style={styles.titulo}>    Name Files: {item.files[1].name}</Text>
            <Text style={styles.titulo}>    Files[2]: </Text>
            <Text style={styles.titulo}>    Type Files: {item.files[2].type}</Text>
            <Text style={styles.titulo}>    Name Files: {item.files[2].name}</Text>
            <Text style={styles.titulo}> ----------------------------------------------------</Text>
          </ScrollView>
        )}
        keyExtractor={renderitem => renderitem.id}
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
    backgroundColor: '#714adf',
    color: 'white',
  },
  logo: {
    width: '100%',
    height: 120,
  },
  titulo: {
    color: '#a9a9a9',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});