import { useState } from "react";

function InputBox(
    {
    label, 
    amount,
    currencyOptions,
    setAmount,
    currencyName,
    selectCurrency,
    amountDisable = false,
    }){



    const option = currencyOptions.map((currency)=>{
        return <option key={currency} value={currency}>{currency}</option>
    })
    
    
    return(
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input                    
                    className="outline-none w-full bg-transparent py-1.5 border rounded-lg px-2"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-2/5"
                    value={currencyName}
                    onChange={(e)=>selectCurrency(e.target.value)}
                    >
                  {option}
                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox;