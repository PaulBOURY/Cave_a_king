import { useLoaderData } from "react-router-dom";
import Demonstration from "../../components/Demonstration/Demonstration";



function DemonstrationPage() {
  const demonstrationData = useLoaderData();
  return (
    <Demonstration demonstrationData={demonstrationData}/>
  )
}

export default DemonstrationPage