import PropTypes from "prop-types";
import React from "react";

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
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed

            setCurrentGuess("");
          }}
        >
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
