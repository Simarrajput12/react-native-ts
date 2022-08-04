import React,{useState} from 'react';
import {View, Text, FlatList, TextInput, Pressable} from 'react-native';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    
    const handleChange = (item: string) => {
       setTodo(item)
    }

    const addTodo = () => {
        setTodoList([...todoList, todo])
    }

    const renderItem = ({item}) => (
          <Text>{item}</Text>
    
      );
    console.log('todolist', todoList)

  return (
    <View style={{flex:1, paddingVertical:60,alignItems:'center'}}>
        <TextInput 
        value={todo} 
        placeholder='Enter item'
        onChangeText={setTodo}
        style={{borderWidth:1, borderColor:'black', width:'80%', height:'5%', padding:10}}
        />
        <Pressable style={{height:50, width:120, backgroundColor:'green', top:20, justifyContent:'center', alignItems:'center'}} onPress={addTodo}>
            <Text>Add</Text>
            </Pressable>
            <FlatList data={todoList} renderItem={renderItem} style={{marginTop:30}}/>

    </View>
  )
}
