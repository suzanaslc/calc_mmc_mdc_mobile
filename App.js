import React, { Component } from 'react';
import { Alert, TextInput, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import logo from './assets/math.png'; 


import { Card } from 'react-native-paper';
const image = { uri:'./math.png'};

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      num1: '',
      num2: '',
      result: '',
      resultmdc:'',
    };
  }
  
  calcularMMC(){
    const {num1, num2 } = this.state;
    var resto, x, y;
      x = num1;
      y = num2;
      while(resto!=0){
        resto = x % y;
        x = y;
        y = resto;
      }
      const result = (num1*num2)/x;
      return (Alert.alert('MMC', `O MMC é ${result}`));
    }

    calcularMDC(){
    const {num1, num2 } = this.state;

    a = num1;
    b = num2;

    while(b!==0) {
        
        var resto = a % b;
        a = b;
        b = resto;
    }

      const resultmdc = a;
      
      return (Alert.alert('MDC', `O MDC é ${resultmdc}`));
    }

    

  render() {
    return (
    <View style={styles.container}>
    <Image source={logo}  style={{ width: 200, height: 200, marginTop: 90}} /> 
      <Image source={image} resizeMode="center" style={styles.image}/>
      
      <Text style={styles.paragraph}> Calcular MMC e MDC </Text>

      <TextInput style={styles.input} value={this.state.num1}
          onChangeText={(num1) => this.setState({ num1 })} placeholder={'Digite um numero'}/>
      <TextInput style={styles.input} value={this.state.num2}
          onChangeText={(num2) => this.setState({ num2 })} placeholder={'Digite um numero'}/>
      
      <TouchableOpacity
        style={{ backgroundColor: '#6C63FF' , marginTop: 10, borderWidth: 1, borderColor:'#6C63FF', borderRadius: 10}} 
        onPress={this.calcularMMC.bind(this)}>
        <Text style={{ fontSize: 20, color: '#fff' }}>  Calcular MMC  </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ backgroundColor: '#6C63FF' , marginTop: 10, borderWidth: 1, borderColor:'#6C63FF', borderRadius: 10}} 
        onPress={this.calcularMDC.bind(this)}>
        <Text style={{ fontSize: 20, color: '#fff' }}>  Calcular MDC  </Text>
      </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 8,
    marginBottom: 150,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 75,
    marginBottom: 20,
    },
});
