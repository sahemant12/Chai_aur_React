import "../index.css";
import { useState, useCallback, useEffect, useRef } from "react";


function PasswordGenerator() {

  const [passwordLen, setPasswordLen] = useState(8);
  const [isNumIncluded, setIsNumIncluded] = useState();
  const [isCharIncluded, setIsCharIncluded] = useState();
  const [inputPassword, setInputPassword] = useState(""); 

  const generatePassword = useCallback(()=>{
    let passwordString = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(isNumIncluded) string +="0123456789";
    if(isCharIncluded) string +="!@#$%^&*()_+-=[]{}|/?,.<>~`";

    for (let i = 0; i <passwordLen; i++) {
      passwordString += string.charAt(Math.floor(Math.random()*string.length+1));      
    }
    
    setInputPassword(passwordString);
  }, [passwordLen, isNumIncluded, isCharIncluded, setInputPassword])

  const copyToClipboard = useCallback((e)=>{
    e.target.classList.add("brightness-50", "shadow-4xl");
    setTimeout(()=>{
    e.target.classList.remove("brightness-50", "shadow-4xl");
    }, 300);
    window.navigator.clipboard.writeText(inputPassword);
    passwordRef.current?.select();
    
  }, [inputPassword]);

  //useRef Hook
  const passwordRef = useRef(null);
  useEffect(()=>{
    generatePassword();
  }, [passwordLen, isNumIncluded, isCharIncluded])
  
  return (
    
    <>
  <div className="">
            <div className="flex flex-col justify-center items-center bg-amber-50 gap-y-10 border rounded-2xl w-3/5 mx-auto px-4 py-10">
              <div className="flex w-full border rounded-xl">
                  <input 
                    type="text" 
                    className="px-3 py-2 rounded-xl focus:outline-none w-full bg-white shadow-lg"
                    placeholder="password"
                    readOnly
                    value={inputPassword}
                    ref={passwordRef}
                  />
                  <button 
                    type="button" 
                    className="px-3 py-2 rounded-xl cursor-pointer bg-blue-600 text-white shadow-lg transition-all duration-1000"
                    onClick={copyToClipboard}
                  >Copy</button>
              </div>
              <div className="flex gap-9 text-xl">
                <div className="flex gap-2">
                  <input 
                    type="range" 
                    min="8" 
                    max="50" 
                    value={passwordLen} 
                    className=" w-40 h-8 cursor-pointer"
                    onChange={(e)=>setPasswordLen(e.target.value)}
                    />
                    <label className=" text-orange-500 font-bold">Length: ({passwordLen})</label>
                </div>
                <div className="flex gap-1 items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={isNumIncluded}
                    className=" w-4 h-4 cursor-pointer shadow-lg"
                    onClick={() => setIsNumIncluded(prevValue => !prevValue)}
                  />
                  <label className=" text-orange-500 font-bold">Numbers</label>
                </div>
                <div className="flex gap-1 items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={isCharIncluded}
                    className=" w-4 h-4 cursor-pointer shadow-lg"
                    onClick={() => setIsCharIncluded(prevValue => !prevValue)}
                  />
                  <label className=" text-orange-500 font-bold">Characters</label>
                </div>
              </div>
        </div>
  </div>
    </>
  )
}

export default PasswordGenerator;