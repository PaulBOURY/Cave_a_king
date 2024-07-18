import { Form } from "react-router-dom";
import PropTypes from 'prop-types';

function ModalDemonstration({
  handleClickModal,
  modalDemo,
  setModalDemo,
}) {
  return (
    <dialog className="dialog" open>
      <Form method="POST" >
        <label>
          Titre de l'évènement
          <input
            type="text"
            name="titre"
            placeholder="Titre de l'évènement"
            className="placeholder"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            className="placeholder"
          />
        </label>
        <label>
          Description
          <input
            type="textarea"
            name="description"
            placeholder="Décrivez l'évènement ici"
            className="placeholder"
          />
        </label>
        <button type="submit">Ajouter l'évènement</button>
      </Form>
      <button type="button" onClick={handleClickModal(modalDemo, setModalDemo)}>
        annuler
      </button>
    </dialog>
  );
}

ModalDemonstration.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  modalDemo: PropTypes.bool.isRequired,
  setModalDemo: PropTypes.func.isRequired,
};

export default ModalDemonstration;
