import React, { useState, createContext } from "react";
import Produtos from "../components/Produtos";

export const CartContext = createContext({});
//CartProvider tem todas as funcionalidades com o carrinho
function CartProvider({ children }) {//children repassa nossas rotas para ser reinderizadas 
    const [cart, setCart] = useState([]);

    function addItemCarrinho(newItem) {
        //verificar se tem item e adiciona no carrinho
        const indexItem = cart.findIndex(item => item.id === newItem.id);//percorre toda a lista e devolve a posição do item
        if (indexItem !== -1) {
            let listaCarrinho = cart;
            listaCarrinho[indexItem].quantidade = listaCarrinho[indexItem].quantidade + 1;
            listaCarrinho[indexItem].total = listaCarrinho[indexItem].quantidade * listaCarrinho[indexItem].price;//calculando total

            setCart(listaCarrinho)
            return;
        }
        let dados = {
            ...newItem,
            quantidade: 1,
            total: newItem.price
        }
        setCart(Produtos => [...Produtos, dados])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCarrinho
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;