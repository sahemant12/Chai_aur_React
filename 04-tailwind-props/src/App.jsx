import Card from "./components/card.jsx"
function App() {
  let mark = 25;
  let newObj = {
    age:12,
    gender: "male",
  }
  let arr = [1, 2, 3];

  return (
    <>
      <Card name="Hemant" marks={mark} myObj={newObj} num={arr}/>
    </>
  )
}

export default App;
