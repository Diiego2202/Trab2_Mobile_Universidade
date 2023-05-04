import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function App() {

  const [universidade, atualizarUniversidade] = useState('');
  const [pais, atualizarPais] = useState('');

  const atualizaUniversidade = (txt) => {
    atualizarUniversidade(txt);
  }

  const atualizaPais = (txt) => {
    atualizarPais(txt);
  }

  const pesquisar = () => {
    if(universidade == ''){
      if(pais == ''){
        console.log('Por favor informe a Universidade e/ou País!!');
      } else{
        axios.get('http://universities.hipolabs.com/search?country=' + pais).then(function (resposta) {
          console.log(resposta.data)
        })
      }
    } else{
      if(pais == ''){
        axios.get('http://universities.hipolabs.com/search?name=' + universidade).then(function (resposta) {
          console.log(resposta.data)
        })
      } else{
        axios.get('http://universities.hipolabs.com/search?name=' + universidade + '&country=' + pais).then(function (resposta) {
          console.log(resposta.data)
        })
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Universidade:</Text>
      <TextInput style={styles.input} 
                 placeholder='Nome da universidade'
                 onChangeText={atualizaUniversidade}
                 value={universidade}/>
      <Text style={styles.texto}>País:</Text>
      <TextInput style={styles.input} 
                 placeholder='Nome do país'
                 onChangeText={atualizaPais}
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