import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import MaskInput from 'react-native-mask-input';
import Api from './src/services/api'

export default function App() {

  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [uf, setUF] = useState('')
  const [ddd, setDDD] = useState('')

  async function searchCep() {
    if (cep == '') {
      Alert.alert('CEP inválido!')
      setCep('')
    }

    try {
      const response = await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUF(response.data.uf)
      setDDD(response.data.ddd)
    } catch (error) {
      console.log('ERROR: ' + error)
      Alert.alert('CEP inválido!')
      setCep('')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Buscador de CEP</Text>
      </View>

      <View style={styles.appContainer}>
        <Text style={styles.appDescription}>
          Um CEP no formato de 8 dígitos (somente números) deve ser fornecido, após
          será fornecido o logradouro, bairro, cidade, estado e o
          DDD correspondente.
        </Text>
        <View style={styles.containerSearchCep}>
          <MaskInput
            value={cep}
            onChangeText={(cepText) => setCep(cepText)}
            placeholder="CEP"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            style={styles.inputSearchCep}
            keyboardType="numeric"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchCep}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          value={logradouro}
          placeholder="Logradouro"
          style={styles.textBox}
          placeholderTextColor="#fff"
        />

        <TextInput
          value={bairro}
          placeholder="Bairro"
          style={styles.textBox}
          placeholderTextColor="#fff"
        />

        <TextInput
          value={localidade}
          placeholder="Cidade"
          style={styles.textBox}
          placeholderTextColor="#fff"
        />

        <View style={styles.containerBottom}>
          <TextInput
            value={uf}
            placeholder="UF"
            style={styles.textBoxBottom}
            placeholderTextColor="#fff"
          />
          <TextInput
            value={ddd}
            placeholder="DDD"
            style={styles.textBoxBottom}
            placeholderTextColor="#fff"
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#111'
  },
  appContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#19ff57',
    justifyContent: 'center'
  },
  topBarTitle: {
    color: '#111',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    alignSelf: 'center'
  },
  appDescription: {
    color: '#d1d1d1',
    padding: 16,
    marginTop: 10,
    fontSize: 16
  },
  containerSearchCep: {
    flexDirection: 'row',
    height: 80,
    width: 380,
    marginHorizontal: 16,
    justifyContent: 'space-between'
  },
  inputSearchCep: {
    borderColor: '#333',
    borderWidth: 1,
    width: 200,
    fontSize: 24,
    marginTop: 20,
    marginEnd: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#19ff57',
    width: 172,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButtonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBox: {
    borderColor: '#333',
    borderWidth: 1,
    width: 380,
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 10,
    padding: 8,
    color: '#fff',
  },
  containerBottom: {
    flexDirection: 'row',
    width: 380,
    justifyContent: 'space-between'
  },
  textBoxBottom: {
    borderColor: '#333',
    borderWidth: 1,
    width: '49%',
    fontSize: 18,
    marginTop: 10,
    padding: 8,
    color: '#fff'
  }
})