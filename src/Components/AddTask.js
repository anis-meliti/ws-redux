import React, { useState } from 'react';
import { Row, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { addTask } from '../js/Actions/actions';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  return (
    <Row>
      <Input
        type='text'
        value={newTask}
        name='newTask'
        placeholder='Enter new Task'
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        onClick={() => {
          addTask(newTask);
          setNewTask('');
        }}
      >
        +
      </Button>
    </Row>
  );
};

export default connect(null, { addTask })(AddTask);
