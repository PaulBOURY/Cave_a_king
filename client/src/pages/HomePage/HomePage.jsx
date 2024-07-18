import { useLoaderData } from "react-router-dom";
import Demonstration from "../../components/Demonstration/Demonstration";
import Slider from "../../components/Slider/Slider";

import "./HomePage.scss"

function HomePage() {

  const demonstrationData = useLoaderData();
  return (
    <>
      <Demonstration demonstrationData={demonstrationData}/>
      <Slider />
    </>
  );
}

export default HomePage;
