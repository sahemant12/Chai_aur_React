// Easy hai(approach)
// 1. make state of all the input field.
// 2. fetch api
// 3. Do => operations on Convert button
// 4. Do => operations on Swap button

import { useState } from "react";
import InputBox from "./Components/InputBox.jsx"
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"

function App() {

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);
  

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);


  const convert = () => {
    setConvertedAmt(currencyInfo[to] * amount);   
  }
  
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmt);
    setConvertedAmt(amount);
  }




  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=12')`}}
      >

            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <div className="w-full mb-1"> 
                            <InputBox 
                                label="From"
                                amount={amount}
                                currencyOptions={currencyOptions}
                                setAmount={setAmount}
                                currencyName={from}
                                selectCurrency={setFrom}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer hover:bg-blue-700 transition-all duration-500"
                                onClick={swap}
                            >
                              swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox 
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={currencyOptions}
                                currencyName={to}
                                selectCurrency={setTo}
                                amountDisable={true}
                            />
                        </div>
                        <button 
                          type="submit" 
                          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-500"
                          onClick={convert}
                        >
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
