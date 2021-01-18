import React, { Component } from "react";

import hookActions from "./actions/hookActions";
import Congrats from "./Congrats";
import languageContext from "./contexts/LanguageContext";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import LanguagePicker from "./LanguagePicker";

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

    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: "en",
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

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
      <h1> Jotto</h1>
      {/* any time the provider changes, it'll re-render all of its children */}
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
}

export default App;
