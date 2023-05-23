import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { InputItem } from './InputItem';
import { RenderLista } from './RenderLista';
import axios from 'axios';

export default function BuscaItem() {

    const [resultado, atualizarUniversidade] = useState([]);
  
    const dados = async (universidade, pais) => {
  
        const url = "http://universities.hipolabs.com/search?" + (universidade ? `&name=${universidade}` : '') + (pais ? `&country=${pais}` : ''); 
        const resposta = await axios.get(url)

        if (resposta.data.length < 1){
            alert("ERRO!! Universidade não foi encontrada!");
        }else{
            atualizarUniversidade(resposta.data)
        }
  }

  return (
    <View style={styles.container}>
      <InputItem callBackPesquisar={dados}/>
      <RenderLista resultado={resultado}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#ffff',

  },
  texto: {
    backgroundColor: 'yellow',
    fontSize: 32
  },
  lista:{
    padding:10,
     backgroundColor:"red",
    textAlign:"center", 
    margin:10,
    borderRadius:6
  }
});