import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";

export default function AboutColumn() {
  return (
    <div className="contenedor-columna">
    <div className="columna">
      <GoGoal className="column-icon"/> <h2>MISIÓN</h2>
      <p>Formar peloteros competitivos es nuestra pasión. Creemos que el béisbol no solo se trata de habilidades técnicas, sino también de caráter, disciplica y trabajo en equipo.</p>
    </div>
    <div className="columna">
      <GiStairsGoal className="column-icon"/> <h2>VISIÓN</h2>
      <p>Convertirnos en el semillero de talentos beisbolísticos, donde atletas y personas de bien se forjan para alcanzar sus sueños.</p>
    </div>
  </div>
  );
}