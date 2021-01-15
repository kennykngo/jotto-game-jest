import React, { Component } from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

import hookActions from "./actions/hookActions";

import Input from "./Input";

/**
 * reducer to update state, called automatically by dispatch
 * @param {object} state - existing state
 * @param {object} action - contains 'type' and 'payload' properties for the state update
 *                          for example: {type: "setSecretWord", payload: "party"}
 * @returns {object} - new state
 */

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="contianer" data-test="spinner">
        <div className="spinner-border" role="status"></div>
        <span className="sr-only">Loading...</span>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="container App">
      <Input secretWord={state.secretWord} />
    </div>
  );
}

export default App;
