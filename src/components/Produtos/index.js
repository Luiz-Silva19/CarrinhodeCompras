import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Produtos({ data }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
    },
    addButton: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#168fff',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 10
    }
})