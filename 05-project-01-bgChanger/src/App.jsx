import { useState } from "react";
import "./index.css";

function App() {
  let [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed bottom-10 inset-x-0 flex flex-wrap justify-center rounded-lg border border-black shadow bg-white py-[10px] px-[30px] w-4/5 mx-auto gap-[10px]">

          <div className="rounded-md border border-red-500 py-[5px] px-[20px] cursor-pointer bg-red-500" onClick={()=> setColor("red")}>Red</div> 
          <div className="rounded-md border border-green-500 py-[5px] px-[20px] cursor-pointer bg-green-500" onClick={()=> setColor("green")}>Green</div>
          <div className="rounded-md border border-yellow-500 py-[5px] px-[20px] cursor-pointer bg-yellow-500" onClick={()=> setColor("yellow")}>Yellow</div>
          <div className="rounded-md border border-orange-500 py-[5px] px-[20px] cursor-pointer bg-orange-500" onClick={()=> setColor("orange")}>Orange</div>
          <div className="rounded-md border border-purple-500 py-[5px] px-[20px] cursor-pointer bg-purple-500" onClick={()=> setColor("purple")}>Purple</div>
          <div className="rounded-md border border-gray-500 py-[5px] px-[20px] cursor-pointer bg-gray-500" onClick={()=> setColor("gray")}>Gray</div>
          <div className="rounded-md border border-black py-[5px] px-[20px] cursor-pointer text-black bg-white" onClick={()=> setColor("white")}>White</div>
          <div className="rounded-md border border-violet-500 py-[5px] px-[20px] cursor-pointer bg-violet-500" onClick={()=> setColor("violet")}>Violet</div>
          <div className="rounded-md border border-black py-[5px] px-[20px] cursor-pointer bg-black text-white" onClick={()=> setColor("black")}>Black</div>

        </div>
      </div>
    </>
  )
}

export default App;
