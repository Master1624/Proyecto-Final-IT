import classes from "./Uniforme.module.css"

const Uniforme = (props) => {
  return (
    <li className={classes.uniforme} >
      <h2>{props.nombre}</h2>
      <h3>{props.equipo}</h3>
      <h3>{props.temporada}</h3>
      <p>{props.color}</p>
    </li>
  );
};

export default Uniforme;
