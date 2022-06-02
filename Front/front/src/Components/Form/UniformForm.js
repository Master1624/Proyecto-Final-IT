import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";
import classes from './UniformForm.module.css'

const UniformForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: enteredTeam,
    isValid: teamIsValid,
    hasError: teamHasError,
    valueChangeHandler: teamChangeHandler,
    valueBlurHandler: teamBlurHandler,
    reset: resetTeam,
  } = useInput(isNotEmpty);
  const {
    value: enteredColor,
    isValid: colorIsValid,
    hasError: colorHasError,
    valueChangeHandler: colorChangeHandler,
    valueBlurHandler: colorBlurHandler,
    reset: resetColor,
  } = useInput(isNotEmpty);
  const {
    value: enteredSeason,
    isValid: seasonIsValid,
    hasError: seasonHasError,
    valueChangeHandler: seasonChangeHandler,
    valueBlurHandler: seasonBlurHandler,
    reset: resetSeason,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && teamIsValid && colorIsValid && seasonIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const teamInputClasses = teamHasError
    ? "form-control invalid"
    : "form-control";
  const colorInputClasses = colorHasError
    ? "form-control invalid"
    : "form-control";
  const seasonInputClasses = seasonHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //TODO POST request
    resetName();
    resetTeam();
    resetColor();
    resetSeason();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler}>
        <div className="control-group">
          <div className={nameInputClasses}>
            <label className={classes.label} htmlFor="name">Name</label>
            <input
            className={classes.input}
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
          </div>
          <div className={teamInputClasses}>
            <label className={classes.label} htmlFor="team">Team</label>
            <input
            className={classes.input}
              type="text"
              id="team"
              onChange={teamChangeHandler}
              onBlur={teamBlurHandler}
              value={enteredTeam}
            />
          </div>
          <div className={colorInputClasses}>
            <label className={classes.label} htmlFor="color">Color</label>
            <input
            className={classes.input}
              type="text"
              id="color"
              onChange={colorChangeHandler}
              onBlur={colorBlurHandler}
              value={enteredColor}
            />
          </div>
          <div className={seasonInputClasses}>
            <label className={classes.label} htmlFor="season">Season</label>
            <input
            className={classes.input}
              type="text"
              id="season"
              onChange={seasonChangeHandler}
              onBlur={seasonBlurHandler}
              value={enteredSeason}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} disabled={!formIsValid}>Submit</button>
          <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default UniformForm;
