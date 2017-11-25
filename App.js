import React from 'react';
import { StyleSheet, Text, View, Image, ToolbarAndroid, Platform, StatusBar, Button, ScrollView, Modal, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: "Empty",
    };

    this._createData = this._createData.bind(this);
    this._readData = this._readData.bind(this);
    this._updateData = this._updateData.bind(this);
    this._deleteData = this._deleteData.bind(this);
  }


  _createData() {
    console.log('Create Todos');
    let url = 'http://jsonplaceholder.typicode.com/todos/';
    let data = { userId: 1, title: 'createTodo', completed: false };
    let message = `Method: POST${'\n'}URL: ${url}${'\n'}Create Data: ${JSON.stringify(data)}`
    alert(message);
    fetch(url, { method: 'POST' }, { data })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          response: JSON.stringify(responseData)
        });
      })
      .done();
  }

  _readData() {
    console.log('Read Todos');
    let randomId = Math.ceil(Math.random() * 10);
    let url = 'http://jsonplaceholder.typicode.com/todos/' + randomId;
    let message = `Method: GET${'\n'}URL: ${url}${'\n'}ID: ${randomId}`
    alert(message);
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          response: JSON.stringify(responseData)
        });
      })
      .done();
  }

  _updateData() {
    console.log('Update Todos');
    let randomId = Math.ceil(Math.random() * 10);
    let url = 'http://jsonplaceholder.typicode.com/todos/' + randomId;
    let data = { userId: 1, title: 'updateTodo', completed: true };
    let message = `Method: PUT${'\n'}URL: ${url}${'\n'}ID: ${randomId}${'\n'}Update Data: ${JSON.stringify(data)}`
    alert(message);
    fetch(url, { method: 'PUT' }, { data })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          response: JSON.stringify(responseData)
        });
      })
      .done();
  }

  _deleteData() {
    console.log('Delete Todos');
    let randomId = Math.ceil(Math.random() * 10);
    let url = 'http://jsonplaceholder.typicode.com/todos/' + randomId;
    let message = `Method: DELETE${'\n'}URL: ${url}${'\n'}ID: ${randomId}`;
    alert(message);
    fetch(url, { method: 'DELETE' })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          response: JSON.stringify(responseData)
        });
      })
      .done();
  }

  render() {

    return (

      <View style={styles.root}>

        <ToolbarAndroid title="Refactory Preps App" style={styles.toolbar} elevation={3} />

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.cardProfile} elevation={2} >
              <Image source={require('./assets/img/pp-square.jpg')} style={styles.imgProfile} />
              <Text style={styles.txtName}>Muhammad Wahyudin</Text>
              <Text style={styles.txtBatch}>#8 Gambino</Text>
            </View>

            <View style={styles.cardCRUD} elevation={2} >
              <Button onPress={this._createData} title="Create" color='#4CAF50' />
              <Button onPress={this._readData} title="Read" />
              <Button onPress={this._updateData} title="Update" />
              <Button onPress={this._deleteData} title="Delete" color='#F44336' />
            </View>

            <View style={styles.cardCRUD} elevation={2} >
              <Text>Response:{'\n'}{this.state.response}</Text>
            </View>
          </View>
          
        </ScrollView>

       

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
    width: '100%',
    alignItems: 'center'
  },
  toolbar: {
    height: 56,
    width: '100%',
    backgroundColor: '#fff'
  },
  cardProfile: {
    width: '80%',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 16,
  },
  cardCRUD: {
    width: '80%',
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    color: '#888'
  },
});
