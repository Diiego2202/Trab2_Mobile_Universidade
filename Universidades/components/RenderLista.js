import { FlatList } from 'react-native';


export const RenderLista = (props) => {
    return  <FlatList
    data={props.dados} 
    renderItem={({item, index}) => <RenderItem 
                                        item={item.name}
                                        country={item.country} 
                                        indice={index}
                                        callBackRemover={props.callBackRemover}/>}
    keyExtractor={idx => idx.descricao} />;
}
