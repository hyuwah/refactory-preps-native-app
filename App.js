import React from 'react';
import { StyleSheet, Text, View, Image, ToolbarAndroid, Platform, StatusBar } from 'react-native';

export default class App extends React.Component {


  render() {



    return (

      <View style={styles.root}>

        <ToolbarAndroid title="Refactory Preps App" style={styles.toolbar} elevation={3} />

        <View style={styles.container}>
          <View style={styles.cardProfile} elevation={2} >
            <Image source={require('./assets/img/pp-square.jpg')} style={styles.imgProfile} />
            <Text style={styles.txtName}>Muhammad Wahyudin</Text>
            <Text style={styles.txtBatch}>#8 Gambino</Text>
          </View>         
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }, 
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  toolbar: {
    height: 48,
    width: '100%',
    backgroundColor: '#fff'
  },
  cardProfile: {
    width:'80%',    
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:8, 
    padding: 16,
  },
  imgProfile: {
    borderRadius: 100,
    width: 128,
    height: 128
  },
  txtName: {
    fontSize: 32,
  },
  txtBatch: {
    fontSize: 24,
    color:'#888'
  }
});
