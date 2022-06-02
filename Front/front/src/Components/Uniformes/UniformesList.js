import Uniforme from "./Uniforme";
import classes from "./UniformesList.module.css";

const UniformesList = (props) => {
  return (
    <ul className={classes["uniformes-list"]}>
      {props.uniforms.map((uniform) => (
        <Uniforme
          key={uniform.id}
          nombre={uniform.nombre}
          equipo={uniform.equipo}
          color={uniform.color}
          temporada={uniform.temporada}
        />
      ))}
    </ul>
  );
};

export default UniformesList;
