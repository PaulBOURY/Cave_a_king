import { useState } from "react";
import PropTypes from 'prop-types';

import poster from "../../assets/images/affiche_cave_a_king.png";

import "./Demonstration.scss";
import ModalDemonstration from "../ModalDemonstration/ModalDemonstration";

function Demonstration({demonstrationData}) {
  const [modalDemo, setModalDemo] = useState(false);

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };

 
  return (
    <>
      <h2 className="demoTitle">Nos représentations</h2>
      <figure className="demoFigure">
        <img
          src={poster}
          alt="affiche d'une représentation de la cave à king"
          className="demoPoster"
        />
        <figcaption>
          Titre: {demonstrationData[0].titre}  Le : {demonstrationData[0].date}  Description : {demonstrationData[0].description}
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={handleClickModal(modalDemo, setModalDemo)}
        className="buttonAdd"
      >
        Ajouter un évènement
      </button>
      {modalDemo && (
        <ModalDemonstration
          handleClickModal={handleClickModal}
          modalDemo={modalDemo}
          setModalDemo={setModalDemo}
        />
      )}
    </>
  );
}

Demonstration.propTypes = {
  demonstrationData: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Demonstration;
