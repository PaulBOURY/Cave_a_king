import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Slider from "../../components/Slider/Slider";

import "./HomePage.scss";
import ModalDemonstration from "../../components/ModalDemonstration/ModalDemonstration";

function HomePage() {
  const [modalDemo, setModalDemo] = useState(false);
  const demo = useLoaderData();

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };

  return (
    <>
      <Slider />
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
      {demo && demo.length > 0 && (
        <Link to={`/demonstration/${demo[0].id}`}>
          Aller voir nos représentations
        </Link>
      )}
    </>
  );
}

export default HomePage;
