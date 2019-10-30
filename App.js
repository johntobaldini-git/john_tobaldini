import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require("./assets/capa.png")} />
       <Text> - </Text>
      <Text style={{fontSize: 35, color: "#F0F8FF"}}> Bucket do John </Text> 

      <Button value="Exibir Alert" style={styles.container} onPress={() => {
    alert('@johntobaldini');
  }}  title= "Siga-Me"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA8072',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
