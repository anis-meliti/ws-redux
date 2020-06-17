import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import TaskList from './Components/TAskList';
import AddTask from './Components/AddTask';

function App() {
  return (
    <Container>
      <TaskList />

      <AddTask />
    </Container>
  );
}

export default App;
