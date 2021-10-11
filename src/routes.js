import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home';
import Carrinho from './carrinho';
import DetalheProduto from './detalheProduto';
import Contador from './comunicacaoComps/contador';
import Pedido from './comunicacaoComps/finalizacaoPedido/pedido';
import ConclusaoPedido from './comunicacaoComps/finalizacaoPedido/conclusao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
                <Route path="/contador" exact={true} component={Contador} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/conclusao" exact={true} component={ConclusaoPedido} />
            </Switch>
        </BrowserRouter>
    )
}