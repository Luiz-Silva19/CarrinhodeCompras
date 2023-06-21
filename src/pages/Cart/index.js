import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../../context/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart() {

    const { cart, addItemCarrinho } = useContext(CartContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        addQuantidade={() => addItemCarrinho(item)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fafafa',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    }
})
