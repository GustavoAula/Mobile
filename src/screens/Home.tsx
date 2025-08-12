import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "./components/Product"

export function Home() {
    
    const products = [
        "Arroz",
        "Feijão",
        "Macarrão",
        "Farinha de Trigo",
        "Açúcar",
        "Sal",
        "Óleo de Soja",
        "Leite",
        "Ovos",
        "Pão",
        "Café",
        "Chá",
        "Manteiga",
        "Queijo",
        "Presunto",
        "Frango",
        "Carne Bovina",
        "Peixe",
        "Frutas",
        "Legumes",
        "Verduras",
        "Batata",
        "Cebola",
        "Alho",
        "Tomate",
        "Cenoura",
        "Banana",
        "Maçã",
        "Laranja",
        "Uva",
        "Refrigerante",
        "Suco",
        "Água Mineral",
        "Biscoitos",
        "Cereais",
        "Molho de Tomate",
        "Condimentos",
        "Iogurte",
        "Sorvete",
        "Chocolate"
      ];

    function handleAddProduct(){

    }

    function handleRemoveProduct(name: String){
        console.log(`Você clicou no botão de Remover Produto $(name)`)
    }

    return(
        <View style={style.container}>
            <Text style={style.tittle}>Lista de Compras</Text>
            <Text style={style.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={style.form}>
                <TextInput 
                style={style.input}
                placeholder="Nome do Produto"
                placeholderTextColor="#BDBABA"
                keyboardType="default"
                />

                <TouchableOpacity style={style.button} onPress={handleAddProduct}>
                    <Text style={style.textButton}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.listTitle}>Compras Pendentes</Text>
            
            <View style={style.list}>
                {/* <Text style={style.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text> */}

            <Product name="Iphone" onRemove={() => handleRemoveProduct("Iphone")} />
            {
                products.map()
            }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#EAEAEA",
        padding: 24,
    },
    tittle:{
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 48
    },
    todaysDate:{
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor:"#FFF", 
        borderRadius: 5,
        marginRight: 16,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 18,
        marginBottom: 36
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor:"#31C667",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        alignItems: "center",
        justifyContent:"center"
    },
    textButton: {
        color: "#FFF",
        fontWeight: "600",
        fontSize: 24,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 16
    },
    listEmptyText: {
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 19.2,
        textAlign: 'center',
    },
    list:{
        flex: 1,
        justifyContent: 'center',
    }
})