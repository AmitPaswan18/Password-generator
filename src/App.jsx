import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setCharacter] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);
  const passWordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (char) str += "?~!@#$%&*+/";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, char, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passWordGenerator();
  }, [length, number, char, passWordGenerator]);
  return (
    <div className=" h-[50vh] mt-[20vh] bg-gray-800 max-w-md mx-auto rounded-md flex items-center justify-center">
      <div className="my-4 space-y-4 overflow-hidden">
        <h1 className=" text-2xl text-white">Password Generator</h1>
        <input
          className="outline-none px-3 py-1 rounded-sm placeholder:px-2"
          type="text"
          readOnly
          placeholder="Password"
          value={password}
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-400 ml-2 p-1.5 text-sm
          text-white  rounded-md"
          type="button">
          Copy
        </button>
        <div className="text-white">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label> Length: {length}</label>
        </div>
        <div className="text-white">
          <input
            defaultChecked={number}
            type="checkbox"
            id="number"
            onChange={() => {
              setnumber((prev) => !prev);
            }}
          />
          <label> Number</label>
        </div>
        <div className="text-white">
          <input
            defaultChecked={char}
            type="checkbox"
            id="character"
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label> Character </label>
        </div>
      </div>
    </div>
  );
}

export default App;