import React from "react";
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import "./Form.css";

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
    {/* O evento onChange é acionado sempre que
      o valor do input é alterado, independentemente de o usuário ter concluído a edição do campo ou
      não. Isso permite que a aplicação reaja imediatamente a cada alteração do valor do input,
      atualizando o estado do componente e refletindo as alterações na interface do usuário. */}
      <input
        onChange={handleChange}
        type="text"
        placeholder='Meu palworld na tua cara'
        value={newTask} //Preciso comentar se eu quiser comentar o valor do input da primeira forma
      />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

//Se eu não quero alguma props obrigatória, ou seja se a props não é requerida (isRequired) fazer assim:
// Form.defaultProps = {
//   newTask: 'Valor Padrão'
// }


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask:  PropTypes.string.isRequired,
}
