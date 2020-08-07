import {createAppContainer, createStackNavigator} from 'react-navigation';


import Orcamentos from './pages/Orcamentos';
import Descricao from './pages/Descricao'; 


export default createAppContainer(
    
    // Componente cabeçalho global
    createStackNavigator({
        Descricao,
        Orcamentos,
    }, {
        initialRouteName: 'Orcamentos',
        defaultNavigationOptions: {
            headerBackTitle: null,
        },
        mode: 'modal'
    })

    
);