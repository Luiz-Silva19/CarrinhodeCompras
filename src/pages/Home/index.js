import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Produtos from '../../components/Produtos';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
    const [produtos, setprodutos] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90
        },
        {
            id: '2',
            name: "Chocolate",
            price: 6.50
        },
        {
            id: '4',
            name: "Queijo 500g",
            price: 15
        },
        {
            id: '5',
            name: "Batata frita",
            price: 23.90
        },
        {
            id: '6',
            name: "Guarana lata",
            price: 6.00
        },
    ])
    return (
        //SafeAreaView só aplica para o IOS, "quebradinho de tela"
        <SafeAreaView style={styles.container}>
            <View style={styles.Cartcontent}>
                <Text style={styles.title}>Lista de Produtos</Text>

                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate("Cart")}
                >
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>9</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={produtos}
                keyExtractor={(item) => String(item.id)}//garantindo que o id sempre será String
                renderItem={({ item }) => <Produtos data={item} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingStart: 14,
        paddingEnd: 14,
    },
    Cartcontent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        fontSize: 12,

    }
})