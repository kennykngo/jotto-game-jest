import React from "react";
import PropTypes from "prop-types";

function Input({ secretWord }) {
  // Doesn't destructure it to be able to mock.
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          type="text"
        />
        {/* needs prevent default  */}
        <button data-test="submit-button" className="btn btn-primary-mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
