import { FlatList } from 'react-native';
import { RenderItem } from './RenderItem';


export const RenderLista = (props) => {
    console.log(props.resultado)
    return  <FlatList
    data={props.resultado} 
    renderItem={({item, index}) => <RenderItem 
                                        universidade={item.name}
                                        pais={item.country} 
                                        indice={index}/>}
    keyExtractor={idx => Math.random()}/>
}
