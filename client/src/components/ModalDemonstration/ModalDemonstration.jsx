import { useState } from 'react';
import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendData } from '../../services/apiService'; // Adjust import path as per your project structure

function ModalDemonstration({
  handleClickModal,
  modalDemo,
  setModalDemo,
}) {
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
      const response = await sendData(demonstrationUrl, data, 'POST');
      if (response.ok) {
        setTitre('');
        setDate('');
        setDescription('');
        setModalDemo(false);
      } else {
        console.error('Failed to add event:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  };

  return (
    <dialog className="dialog" open={modalDemo}>
      <Form onSubmit={handleSubmit}>
        <label>
          Titre de l'évènement
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Titre de l'évènement"
            className="placeholder"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="placeholder"
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Décrivez l'évènement ici"
            className="placeholder"
          />
        </label>
        <button type="submit">Ajouter l'évènement</button>
      </Form>
      <button type="button" onClick={() => handleClickModal(modalDemo, setModalDemo)}>
        Annuler
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
