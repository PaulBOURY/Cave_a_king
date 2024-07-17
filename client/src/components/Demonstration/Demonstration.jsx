import poster from "../../assets/images/affiche_cave_a_king.png"
import "./Demonstration.scss"

function Demonstration() {
  return (
    <>
    <h2 className="demoTitle">Nos représentations</h2>
    <figure className="demoFigure">
        <img src={poster} alt="affiche d'une représentation de la cave à king" className="demoPoster" />
        <figcaption>
            Titre: 3615 Kings Le : 26/07/2024 Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste exercitationem assumenda similique repellendus illo ipsa quae, hic facere quas quos, laboriosam pariatur ducimus consectetur porro rem fugit delectus officia rerum?
        </figcaption>
    </figure>
    </>
  )
}

export default Demonstration