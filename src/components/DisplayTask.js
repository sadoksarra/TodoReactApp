import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTask,
  completeTask,
  removeTask,
  updateTask,
} from "../redux/reducer";
import ListTask from "./ListTask"

const mapStateToProps = (state) => {
  return {
    task: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
    removeTask: (id) => dispatch(removeTask(id)),
    updateTask: (obj) => dispatch(updateTask(obj)),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

const DisplayTask = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytask">
      <div className="buttons">

        <button
          onClick={() => setSort("active")}
        >
          Active
        </button>

        <button
          onClick={() => setSort("completed")}
        >
          Completed
        </button>

        <button
          onClick={() => setSort("all")}
        >
          All
        </button>

      </div>

      <ul>

          {props.task.length > 0 && sort === "active"
            ? props.task.map((item) => {
                return (
                  item.completed === false && (

                    <ListTask
                      key={item.id}
                      item={item}
                      removeTask={props.removeTask}
                      updateTask={props.updateTask}
                      completeTask={props.completeTask}
                    />

                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.task.length > 0 && sort === "completed"
            ? props.task.map((item) => {
                return (
                  item.completed === true && (
                    <ListTask
                      key={item.id}
                      item={item}
                      removeTask={props.removeTask}
                      updateTask={props.updateTask}
                      completeTask={props.completeTask}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.task.length > 0 && sort === "all"
            ? props.task.map((item) => {
                return (
                  <ListTask
                    key={item.id}
                    item={item}
                    removeTask={props.removeTask}
                    updateTask={props.updateTask}
                    completeTask={props.completeTask}
                  />
                );
              })
            : null}

      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTask);
