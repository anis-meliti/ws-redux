import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../js/Actions/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(task.desc);
  return (
    <Row className='mt-3'>
      <Col md={8}>
        {task.isEdited ? (
          <Input
            type='text'
            defaultValue={task.desc}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
        ) : (
          <span>{task.desc}</span>
        )}
      </Col>
      <Col md={2}>
        <Button
          color='info'
          onClick={() => {
            !task.isEdited
              ? dispatch(toggleTask(task.id))
              : dispatch(
                  editTask({ ...task, desc: updatedTask, isEdited: false })
                );
          }}
        >
          {task.isEdited ? `save` : `edit`}
        </Button>
        <Button
          color='danger'
          onClick={() => {
            dispatch(deleteTask(task.id));
          }}
        >
          Delete
        </Button>
      </Col>
    </Row>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
