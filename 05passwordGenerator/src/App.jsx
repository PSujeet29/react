import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*+-_<>,./{}[]\\";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, characterAllowed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-fit mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-orange-600 text-4xl font-bold">Password Generator</h1>
        <br />
        <div className="flex shadow rounded-lg overflow-hidden my-auto">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
          />
          <button className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-1 hover:bg-blue-500">
            Copy
          </button>
        </div>
        <br />
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={64}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label>Include Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label>Include Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
