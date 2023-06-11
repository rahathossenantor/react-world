import {useState} from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  // const item = [
  //   {name: "JavaScript", description: "A programming language", price: "00"},
  //   {name: "Java", description: "A programming language", price: "00"},
  //   {name: "Python", description: "A programming language", price: "00"},
  //   {name: "PHP", description: "A programming language", price: "00"}
  // ]
  
  // const design = {
  //   color: "skyblue",
  //   padding: "10px",
  //   border: "1px solid yellow",
  //   borderRadias: "5px",
  //   float: "left",
  //   margin: "10px"
  // }

  // const Product = props => {
  //   const {name, description, price} = props.productsInfo
  //   return (
  //     <div style={design}>
  //       <h3>{name}</h3>
  //       <p>{description}</p>
  //       <h4>{price}</h4>
  //       <button>Buy Now</button>
  //     </div>
  //   )
  // }
  const friends = [
    {name: "Ratul", age: "14", room: "8th"},
    {name: "Morsalin", age: "16", room: "9th"},
    {name: "Mehedi", age: "15", room: "9th"},
    {name: "Rashed", age: "unknown", room: "Web Developer"},
    {name: "Jamshed", age: "unknown", room: "Web Developer"}
  ]

  function Dost(props) {
    const {name, age, room} = props.info
    return (
      <div style={{
        float: "left",
        margin: "10px",
        border: "1px solid yellow",
        padding: "10px"
      }}>
        <p>{name}</p>
        <p>{age}</p>
        <p>{room}</p>
      </div>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React-World</h1>

      {/* {item.map(data => <Product productsInfo={data}></Product>)} */}
      
      {/* {friends.map(firendName => <Dost name={firendName}></Dost>)} */}

      {/* <Dost info={friends[0]}></Dost>
      <Dost info={friends[1]}></Dost>
      <Dost info={friends[2]}></Dost>
      <Dost info={friends[3]}></Dost> */}

      {friends.map(data => <Dost info={data}></Dost>)}
    </>
  )
}

export default App