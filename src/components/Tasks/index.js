import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types'

import "./Tasks.css";

export default function Tasks({ tasks, handleEdit, handleDelete, styleTask }) {
  return (
    <ul className="tarefas">
      {/* Key: serve como um norte para um loop em react */}
      {tasks.map((tarefa, indexOfTarefa) => (
        <li key={indexOfTarefa} style={styleTask}>
          {`${indexOfTarefa + 1} - ${tarefa}`}
          <span>
            <FaEdit
              onClick={(event) => handleEdit(event, indexOfTarefa) }
              className="edit"
            />
            <FaWindowClose
              onClick={(event) => handleDelete(event, indexOfTarefa)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}



Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  styleTask: PropTypes.object.isRequired,
}
