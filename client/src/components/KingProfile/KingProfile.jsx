import Johnny from "../../assets/images/cave_a_king5.png";
import "./KingProfile.scss";

function KingProfile() {
  return (
    <>
      <h2>Johnny deeper</h2>
      <figure className="kingProfileFigure">
        <img
          src={Johnny}
          alt="profil de Johnny deeper"
          className="kingProfilePicture"
        />
        <figcaption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem,
          nobis possimus magni eos quibusdam quia pariatur tempora debitis
          cumque expedita iste, perspiciatis sint incidunt dicta inventore ut.
          Recusandae, repellat!
        </figcaption>
      </figure>
    </>
  );
}

export default KingProfile;
