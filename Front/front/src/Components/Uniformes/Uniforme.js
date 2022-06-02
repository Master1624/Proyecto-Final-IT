import classes from "./Uniforme.module.css"

const Uniforme = (props) => {
  return (
    <li className={classes.uniforme} >
      <h1>{props.nombre}</h1>
      <h2>{props.equipo}</h2>
      <h3>{props.temporada}</h3>
      <p>{props.color}</p>
    </li>
  );
};

export default Uniforme;
