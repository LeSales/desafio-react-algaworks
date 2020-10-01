import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.styles"
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/productsList.json'

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61'];

    const [products, setProducts] = useState(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState([]);
    
    useEffect(() => {
        const newSelectedProducts = products
        .filter(product => product.checked);

        setSelectedProducts(newSelectedProducts)
    }, [products])

    function handleToggle (id, checked, name) {
        const newProducts = products.map(product => 
            product.id === id
                ? { ...product, checked: !product.checked }
                : product    
        )
        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            
            left={
                <ShoppingList 
                    title="produtos disponíveis"
                    products={products}
                    onToggle={handleToggle}
                />}
            middle={
                <ShoppingList 
                    title="sua lista de compras"
                    products={selectedProducts}
                />}
            right={<div>
                Estatísticas

                <LineChart color={colors[0]} title="saudavel" percentage={80}/>
                <LineChart color={colors[1]} title="Não tão saudavel" percentage={20}/>
                <LineChart color={colors[2]} title="limpeza" percentage={40}/>
                <LineChart color={colors[3]} title="outros" percentage={15}/>
            </div>}
            
            />
        </Container>
    </Wrapper>
}

export default App