import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/reducer";


const mapStateToProps = (state) => {
  return {
    task: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
  };
}; 



const Task = (props) => {
  console.log("props", props);
  const [task, setTask] = useState("");


  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      props.addTask({
        id: Math.floor(Math.random() * 1000),
        item: task,
        completed: false,
      });
      setTask("");
    }
  }; 

  const handleChange = (e) => {

    setTask(e.target.value);

  };

  
  return (

    <div className="addTask">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
        value={task}
      />

      <button className="add-btn" onClick={() => add()}>
        Add
      </button>
      <br />

     

    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);