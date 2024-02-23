import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './ValidatorTasks.css';

export default function ValidatorTasks({
  handleSearch,
  handleChangeValidator,
  searchTask,
  showTask,
  styleTask
}) {
  return (
    <div>
      <form onSubmit={handleSearch} action="#" className="validatortasks">
        <input
          onChange={handleChangeValidator}
          type="text"
          placeholder="Validação de Tarefas"
          value={searchTask}
        />

        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <section className="section-search" style={styleTask}>{showTask}</section>

    </div>
  );
}

ValidatorTasks.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChangeValidator: PropTypes.func.isRequired,
  searchTask: PropTypes.string.isRequired,
  showTask: PropTypes.string.isRequired,
  styleTask: PropTypes.object.isRequired,
};
