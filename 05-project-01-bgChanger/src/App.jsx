import { useState } from "react";
import "./index.css";

function App() {
  let [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">Hello</div>
      </div>
    </>
  )
}

export default App;
