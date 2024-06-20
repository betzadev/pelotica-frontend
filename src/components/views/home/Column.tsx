import { IoSchool } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

export default function Column() {
  return (
    <div className="contenedor-columna">
    <div className="columna">
      <IoSchool className="column-icon"/> <h2>ACADEMIA PELOTICA </h2>
      <p>Somos una institución de carácter deportivo, orientada al desarrollo integral de niños, adolescentes y adultos en la práctica del beisbol a nivel de prospectos.</p>
    </div>
    <div className="columna">
      <FaRegClock className="column-icon"/> <h2>HORARIOS</h2>
      <p>La academia opera de lunes a viernes, con un horario de trabajo que abarca desde las 7:00 a.m. hasta las 12:00 p.m.</p>
    </div>
  </div>
  );
}