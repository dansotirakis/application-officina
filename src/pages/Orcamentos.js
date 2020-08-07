import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

export default class Orcamentos extends Component {
  
    static navigationOptions = {
        headerTitle: 'Oficina App - Orçamentos',        
    };


    state = {
        proposals: [],
    };

    componentDidMount() {
        this.loadBudgets();
    }

    loadBudgets = async () => {
        const response = await api.get('/db');
        const { proposals } = response.data;

        this.setState({ proposals });
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Descricao', { produto: item });
        }}>
            <View style={styles.produtoContainer}>
            
                <Text style={styles.TitleVendedor}>Vendedor :</Text>
                <Text style={styles.produtoVendedor}>{item.customer}</Text>
                <Text style={styles.TitleCliente}>Cliente :</Text>
                <Text style={styles.produtoCliente}>{item.seller}</Text>
                <Text style={styles.TitlePreco}>Valor :</Text>
                <Text style={styles.produtoPreco}>{item.value}</Text>
                      
                
            </View>
        </TouchableOpacity>

    );

    render() {
        return( 
            <View style={StyleSheet.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.proposals}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
                
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3399CC'
    },

    list: {
        padding: 10,
    },

    produtoContainer: {
        backgroundColor: '#20b2aa',
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 8,
        marginBottom: 5,
        justifyContent: 'center',
    },

    produtoVendedor: {
        fontSize: 15,
        color: '#000',
        marginTop: 5,
        lineHeight: 24,
    },

    produtoPreco: {
        fontSize: 15,
        color: '#000',
        marginTop: 5,
        lineHeight: 24,
    },

    produtoCliente: {
        fontSize: 15,
        color: '#000',
        marginTop: 5,
        lineHeight: 24,
    },

    TitleVendedor: {
        fontSize: 17,
        fontFamily: 'lucida grande',
        color: '#000',
        fontWeight: 'bold',
    },

    TitleCliente: {
        fontSize: 17,
        fontFamily: 'lucida grande',
        color: '#000',
        fontWeight: 'bold',
    },

    TitlePreco: {
        fontSize: 17,
        fontFamily: 'lucida grande',
        color: '#000',
        fontWeight: 'bold',
        
    },
    
});