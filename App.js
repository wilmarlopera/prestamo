import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

//Esté comentario es una prueba.

export default function App() {
  const [vlrPres, setVlrPres] = React.useState("");
  const [tipPres, setTipPres] = React.useState("");
  const [numCuo, setNumCuo] = React.useState("");
  const [vlrCuo, setVlrCuo] = React.useState("");
  const [total, setTotal] = React.useState("");

 
  const CalcularTotal = () => {
   if(vlrPres != "" && tipPres != "" && numCuo != "" ){
      if(parseFloat(vlrPres) > 4000000 ){
       if(parseInt(numCuo)>0) {
        setTotal(parseFloat(vlrPres)+(parseFloat(vlrPres)*parseFloat(tipPres)/100)*parseInt(numCuo));
        setVlrCuo((parseFloat(vlrPres)+(parseFloat(vlrPres)*parseFloat(tipPres)/100)*parseInt(numCuo))/parseInt(numCuo));   
       }  
       else{
         alert("el numero de cuotas debe ser mayor a 0");
       }  
      }
      else{
        alert("valor prestamo debe ser mayor a 4000000 millones");
      }
   }
   else{
     alert("todos los campos deben llenarse");
   }
  }
  const Limpiar = () => {
    setVlrPres('');
    setTipPres('');
    setNumCuo('');
    setVlrCuo('');
    setTotal('');
 } 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de prestamo:</Text>
      <br />
      <br />
      <Text style={styles.text}>Valor préstamo: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setVlrPres}
        value={vlrPres}
      />
      <br />
      <br />
      
      <Picker
        selectedValue={tipPres}
        stail={{height: 50 , widht: 200,borderWidht:1}}
        onValueChange={(itemValue,itemIndex)=>setTipPres(itemValue)}
      >
        <Picker.Item label="seleccione el tipo de prestamo" value=""/>
        <Picker.Item label="vivienda" value="0.5"/>
        <Picker.Item label="educacion" value= "0.7"/>
        <Picker.Item label="vehiculo" value="1.5"/>
        <Picker.Item label="libre inversion" value="2.0"/>

      </Picker>
      
      <br />
      <br />
      <Text style={styles.text}>Número cuotas: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumCuo}
        value={numCuo}
      />
      <br />
      <br />
      <Text style={styles.text}>Valor cuota: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setVlrCuo}
        value={vlrCuo}
      />
      
      <br />
      <br />
      <Text style={styles.text}>Total deuda: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTotal}
        value={total}
      />
      <br />
      <br />
      <Button
        title="Calcular"
        onPress={CalcularTotal}
      />
      <br />
      <Button
        title="Limpiar campos"
        onPress={Limpiar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    border: "solid 1px black",
    borderRadius: 10,
    width: 200,
    height: 40
  },
  text: {
    fontWeight: 'bold'
  }
});