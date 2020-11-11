import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const taskList = useSelector((state) => state.taskReducer.tasks);
  const users = useSelector((state) => state.taskReducer.users);
  return (
    <>
      {taskList.map((task, key) => (
        <Task task={task} key={key} />
      ))}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   taskList: state.taskReducer.tasks,
// });
export default TaskList;
