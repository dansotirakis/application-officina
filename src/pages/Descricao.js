import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Descricao = ({ navigation }) => <Text style={styles.textDescription}>{navigation.state.params.produto.description}</Text>;

Descricao.navigationOptions = ({ navigation }) => ({
    title: `Orçamento ` + navigation.state.params.produto.id + ` - Itens` 
});

export default Descricao;

const styles = StyleSheet.create({
    
    textDescription: {
        fontSize: 20,
        color: '#000',
        padding: 20,
    }
});