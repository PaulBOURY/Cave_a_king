import { Form } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

import poster from "../../assets/images/affiche_cave_a_king.png";

import "./Demonstration.scss";
import ModalModify from "../ModalModify/ModalModify";

function Demonstration({ demonstrationData }) {
  const [modalModify, setModalModify] = useState(false);

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
          Titre: {demonstrationData[0].titre} Le : {demonstrationData[0].date}{" "}
          Description : {demonstrationData[0].description}
        </figcaption>
      </figure>
      <Form method="DELETE">
        <button type="submit" className="buttonDelete">
          supprimer l'évènement
        </button>
      </Form>
        <button type="button" onClick={handleClickModal(modalModify, setModalModify)} className="buttonModify">
          Modifier l'évènement
        </button>
        {modalModify && (
        <ModalModify
          handleClickModal={handleClickModal}
          modalModify={modalModify}
          setModalModify={setModalModify}
          demonstrationData={demonstrationData}
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
