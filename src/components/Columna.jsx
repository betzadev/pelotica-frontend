const Columna = ({ titulo, contenido, icono }) => {
  return (
    <div className="contenedor-columna">
      <div className="columna">
        <{icono} className="column-icon"/>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </div>
  );
};

export default Columna;