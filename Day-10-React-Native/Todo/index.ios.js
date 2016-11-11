/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

export default class Todo extends Component {
    constructor(){
        super();

        this.state = {
            todos: [],
            newTodo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        const value = e.target.value;
        this.setState({newTodo: value})
    }

    handleClick(e){
        e.preventDefault();
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({todos: todos, newTodo: ''})
    }

    handlePress(e){
      //
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, React Native World!</Text>
        <TextInput onChange={this.handleChange} value={this.state.newTodo}/>
        <TouchableHighlight onPress={}>
        </TouchableHighlight>
        {this.state.todos.map(todo => <text>{todo}</text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
