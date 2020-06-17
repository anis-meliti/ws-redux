import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const taskList = useSelector((state) => state.taskReducer.tasks);
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
