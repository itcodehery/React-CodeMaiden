import React, { useState } from 'react';
import './App.css';
import ListTile from './components/ListTile';
import { Button, Input, Stack, Box, HStack } from '@chakra-ui/react';

function App() {
  const [myTodo, setMyTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setMyTodo([...myTodo, inputValue]);
      setInputValue('');
    } else {
      alert('Please enter a valid todo');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = myTodo.filter((_, i) => i !== index);
    setMyTodo(updatedTodos);
  };

  const clearAll = () => {
    setMyTodo([]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const AppBar = () => (
    <HStack className="appbar" justify="space-between" p={4} bg="gray.100">
      <h2>Todo</h2>
      <Button colorScheme="red" onClick={clearAll}>Clear All</Button>
    </HStack>
  );

  return (
    <>
      <AppBar />
      <Stack p={4} spacing={4} width={"100vw"} align="center">
        <HStack spacing={4}>
          <Input
            placeholder="Enter your todo"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </HStack>
        <Box w="100%" maxW="500px">
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {myTodo.map((item, index) => (
              <ListTile key={index} title={item} theFunction={() => removeTodo(index)} />
            ))}
          </ul>
        </Box>
      </Stack>
    </>
  );
}

export default App;
