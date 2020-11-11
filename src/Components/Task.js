import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Button, Col, Input } from 'reactstrap';
import { connect, useDispatch } from 'react-redux';
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
// class Task extends React.Component{

//   render(){
//     return (
//         <Row className='mt-3'>
//       <Col md={8}>
//        {this.props.task.isEdited ? (
//           <Input
//             type='text'
//             defaultValue={this.props.task.desc}
//             // onChange={(e) => setUpdatedTask(e.target.value)}
//           />
//         ) : (
//           <span>{this.props.task.desc}</span>
//         )}
//       </Col>
//       <Col md={2}>
//          <Button
//           color='info'
//           {/*onClick={() => {
//             !this.props.task.isEdited
//               ? dispatch(toggleTask(task.id))
//               : dispatch(
//                   editTask({ ...task, desc: updatedTask, isEdited: false })
//                 );
//           }}*/}
//         >
//           {this.props.task.isEdited ? `save` : `edit`}
//         </Button>
//         <Button
//           color='danger'
//           onClick={() => this.props.deleteTask(this.props.task.id)}
//         >
//           Delete
//         </Button>
//       </Col>
//     </Row>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch)=>({
//   deleteTask: id => dispatch(deleteTask(id)),

// })
// export default connect(null, mapDispatchToProps)(Task);
