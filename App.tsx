import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<String[]>([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos(prev => [text.trim(), ...prev]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo ({Platform.OS})</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type a task…"
        style={styles.input}
      />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item, i) => `${item}-${i}`}
        renderItem={({item}) => <Text style={styles.item}>• {item}</Text>}
        style={{marginTop: 16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 720,
    width: '100%',
    marginHorizontal: 'auto',
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  title: {fontSize: 24, fontWeight: '700', marginBottom: 12},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  item: {fontSize: 16, paddingVertical: 6},
});
