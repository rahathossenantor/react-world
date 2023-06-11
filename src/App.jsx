import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const design = {
    color: "skyblue",
    padding: "10px",
    border: "1px solid yellow",
    margin: "10px"
  }

  const Employe = props => (
    <div style={design}>
      <h3>{props.name}</h3>
      <p>{props.occupation}</p>
      <p>{props.location}</p>
    </div>
  )

  const products = [
    {name: "JavaScript", description: "A programming language", price: "00"}
  ]

  // const productStyle = {
  //   height: "300px",
  //   width: this.height,
  //   border: "1px solid gray",
  //   borderRadias: "5px",
  //   backgroundColor: "light gray",
  //   color: "black",
  //   float: "left"
  // }

  // const Product = props => (
  //   <div style={productStyle}>
  //     <h5>{props.product.name}</h5>
  //     <p>{props.product.description}</p>
  //     <h4>${props.product.price}</h4>
  //     <button>Buy Now</button>
  //   </div>
  // )

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
      {/* <Product product={products[0]}></Product> */}

      <Employe name="Md Rahat Hossen Antor" location="Dhaka, Bangladesh" occupation="Web Developer"></Employe>
      <Employe name="Morsalin Ahmed" location="Dhaka, Bangladesh" occupation="Student"></Employe>
      <Employe name="Tawsif Ahmed Adib" location="Dhaka, Bangladesh" occupation="Student"></Employe>
      <Employe name="Mehedi Hasan Ratul" location="Dhaka, Bangladesh" occupation="Student"></Employe>
    </>
  )
}

export default App