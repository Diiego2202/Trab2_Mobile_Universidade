import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useState } from 'react';

export const InputItem = (props) => {

    const [universidade, atualizarUniversidade] = useState(null);
    const [pais, atualizarPais] = useState(null);

    return <View style={{flexDirection: "column", justifyContent: "center"}}>
                <TextInput style={styles.input} placeholder='Universidade' onChangeText={atualizarUniversidade} value={universidade}/>
                
                <TextInput style={styles.input} placeholder='País' onChangeText={atualizarPais} value={pais}/>

                <Pressable style={styles.button} onPress={() => props.callBackPesquisar(universidade, pais)}>
                    <Text style={styles.text}>Pesquisar</Text>
                </Pressable>    
            </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width: "90%",
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginHorizontal: 30,
        borderRadius: 15,
        elevation: 3,
        backgroundColor:"purple",
      },
      text:{
        color: "black"
      }
})