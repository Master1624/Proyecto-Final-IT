import React, { useCallback, useEffect, useState } from "react";
import UniformesList from "./UniformesList";
import UniformForm from "../Form/UniformForm";
import "./Uniformes.module.css";

const Uniformes = () => {
  const url = "http://localhost:10000/uniformes";

  const [uniform, setUniform] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  }

  const hideFormHandler = () => {
    setFormIsShown(false)
  }

  const fetchUniformes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const tranformedUniformes = data.map((uniforme) => {
        return {
          id: uniforme.idUniforme,
          nombre: uniforme.nombre,
          equipo: uniforme.equipoBaloncesto,
          color: uniforme.colorUniforme,
          temporada: uniforme.temporadaUniforme,
        };
      });
      setUniform(tranformedUniformes);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUniformes();
  }, [fetchUniformes]);

  let content = <p>Found no uniforms</p>;

  if (uniform.length > 0) {
    content = <UniformesList uniforms={uniform} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={showFormHandler}>Add New Uniform</button>
        {formIsShown && <UniformForm onClose={hideFormHandler} />}
      </section>
      {content}
    </React.Fragment>
  );
};

export default Uniformes;
