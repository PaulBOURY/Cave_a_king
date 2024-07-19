import { useState } from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";
import { sendData } from "../../services/apiService";

function ModalModify({ handleClickModal, modalModify, setModalModify }) {
  const demonstrationUrl = "/api/demo";

  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      titre,
      date,
      description
    };

    try {
      const response = await sendData(demonstrationUrl, data, 'PUT');
      if (response.ok) {
        setTitre('');
        setDate('');
        setDescription('');
      } else {
        console.error('Failed to add event:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  };

  return (
    <dialog className="dialog" open aria-labelledby="dialog-modify">
      <Form onSubmit={handleSubmit}>
        <label>
          Titre de l'évènement
          <input
            type="text"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Titre de l'évènement"
            className="placeholder"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            onChange={(e) => setTitre(e.target.value)}
            className="placeholder"
          />
        </label>
        <label>
          Description
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez l'évènement ici"
            className="placeholder"
          />
        </label>
        <button type="submit">modifier l'évènement</button>
      </Form>
      <button type="button" onClick={() => handleClickModal(modalModify, setModalModify)}>
        Annuler
      </button>
    </dialog>
  );
}

ModalModify.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  modalModify: PropTypes.bool.isRequired,
  setModalModify: PropTypes.func.isRequired,
  demonstrationData: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalModify;
