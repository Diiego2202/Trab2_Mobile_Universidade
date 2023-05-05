import { StyleSheet, Text, Pressable, Image, View } from 'react-native';

export const RenderItem = (props) => {

    return <View style={ styles.item }>
                <Text style={{ marginLeft: 10 }}>{props.item}</Text>
            </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row", 
        alignItems: "center",
        flex: 1,
        borderRadius:8, 
        borderColor: "black",
        borderWidth: 1,
        color:"white", 
        margin: 10, 
        padding: 10, 
        backgroundColor: "yellow"
    },
})

