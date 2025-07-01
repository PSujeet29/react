import Card from "./components/cards";
function App(props) {
  let nallaObj = {
    name:"speed",
    age:22
  }


  
  return (
    <>
      <h1 className="bg-green-400 p-4 mb-4 texxt-black rounded-xl">Tailwind Test</h1>
      <Card pizza ="lolo popo pizza" myObj={nallaObj} btnText="Eat Now"/>
      {/* <Card pizza ="mar gayi rita pizza" myObj={nallaObj} btnText = "order it"/> */}
      <Card/>
    </>
  );
}

export default App;
