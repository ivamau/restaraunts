import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import Header from './components/header';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Wake up', id: '1'},
    { text: 'Make breakfast', id: '2'},
    { text: 'Eat the damn breakfast', id: '3'}
  ]);
  const [text, setText] = React.useState("");
  
  const addTodo = (textToAdd) => {
    const newTodo = {text: textToAdd, id: Math.floor(Math.random() * 1000).toString()}
    setTodos(currentTodos => [...currentTodos, newTodo])
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* add todo form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Text>{item.text}</Text>
              )}
            />
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder='Kirjoita muistiinpano tähän'
            />
            <Button color='magenta' onPress={() => addTodo(text)} title='add todo' />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});