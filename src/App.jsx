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

// import { useState, useCallback, useEffect, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   //useRef hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);
//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className="text-white text-center my-3">Password generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3"
//           placeholder="Password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copyPasswordToClipboard}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//           copy
//         </button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
