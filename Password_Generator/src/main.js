import react, {  useCallback, useEffect, useState } from "react";
import reactDom from "react-dom/client";

function Password() {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numChanged, setnumChanged] = useState(false);
  const [charChanged, setcharChanged] = useState(false);


  const generatepassword = useCallback(()=>{
     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numChanged) str += "0123456789";
    if (charChanged) str += "+-)(*&^%$#@!~{}";

    let ansPassword = "";

    for (let i = 0; i < length; i++) {
      ansPassword += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(ansPassword);

  },[length,numChanged,charChanged]);
  

    useEffect(() => {
      generatepassword();
    }, [generatepassword]);

    return (
      <>
      <div className="divs">
        <h1 className="pass">Password is :</h1>
        <h1 className="pass">{Password}</h1>
        <div className="second">
          <input
            className="tp"
            type="range"
            min={5}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label className="one">Length is : {length} </label>
          <input
            type="checkbox"
            defaultChecked={numChanged}
            onChange={() => setnumChanged(!numChanged)}
          ></input>
          <label className="one">Number</label>
          <input
            type="checkbox"
            defaultChecked={charChanged}
            onChange={() => setcharChanged(!charChanged)}
          ></input>
          <label className="one">Character</label>
        </div>
      </div>
        
      </>
    );
  }


reactDom.createRoot(document.getElementById("root")).render(<Password />);
