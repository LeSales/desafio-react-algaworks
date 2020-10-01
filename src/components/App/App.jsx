import React, { useState, useEffect } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from "./App.styles"
import LineChart from '../../shared/LineChart'

function App () {
    const [lettuce, setLettuce] = useState();

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            
            left={<div>
                Produtos disponíveis

                <Checkbox 
                    value={lettuce}
                    title="Alface"
                    onClick={() => setLettuce(!lettuce)}
                    />
            </div>}
            middle={<div>
                Sua lista de compras

                <Checkbox 
                    value={lettuce}
                    title="Alface"
                    onClick={() => setLettuce(!lettuce)}
                    />
            </div>}
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