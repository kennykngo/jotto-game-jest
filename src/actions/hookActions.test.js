import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe("moxios tests", () => {
  // moxios receive all of our axios requests instead of HTTP
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("calls the getSecretWord callback on axios response", async () => {
    const secretWord = "party";
    // moxios gets the MOST RECENT request
    // And responds with an object status and response
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // create mock for callback arg
    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    // see whetehr mock was run with the correct argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
