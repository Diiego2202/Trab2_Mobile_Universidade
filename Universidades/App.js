import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { axios } from 'axios';

export default function App() {

  const [universidade] = useState('');
  const [pais] = useState('');

  const pesquisar = () => {
    const ret = axios.get("http://universities.hipolabs.com/search?name=Univ&country=brazil")
    console.log(ret.data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Universidade:</Text>
      <TextInput style={styles.input} 
                 placeholder='Nome da universidade'
                 value={universidade}/>
      <Text style={styles.texto}>País:</Text>
      <TextInput style={styles.input} 
                 placeholder='Nome do país'
                 value={pais}/>
      <Button title='Pesquisar' onPress={pesquisar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  texto: {
    fontSize: 20
  }
});