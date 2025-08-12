import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    name: String;
    onRemove: () => void;
}


export function Product(props: Props){

    // function handleRemoveProduct(){
        
    // }

    // const handleRemoveProduct = () => {
        
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.stylesName}>{props.name}</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={props.onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        // justifyContent: "space-between"
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 8
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: "center",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        color: "white",
    },
    stylesName:{
        flex: 1,
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 19.2,
        marginLeft: 13.76,
        marginRight: 13.76
    }
})