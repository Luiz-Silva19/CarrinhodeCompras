import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardItem({ data, addQuantidade }) {
    const [quantia, setquantia] = useState(data?.quantidade)

    function aumentarvalor() {
        addQuantidade();
        setquantia(item => item + 1)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>
            <View style={styles.quantiacontainer}>
                <TouchableOpacity style={styles.botaoAdd}>
                    <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantia}>{quantia}</Text>

                <TouchableOpacity style={styles.botaoAdd}>
                    <Text onPress={aumentarvalor}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 8,
        marginBottom: 14,
        padding: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontSize: 16
    },
    quantiacontainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    botaoAdd: {
        backgroundColor: '#168fff',
        padding: 4,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 4,
    },
    quantia: {
        marginLeft: 14,
        marginRight: 14,
    }

})