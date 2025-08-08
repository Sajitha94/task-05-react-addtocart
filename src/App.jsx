import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import Card from './card'

function App() {
  const [cartItems, setCartItems] = useState([]);
   const inceaseCounr=(product)=>{
    const alreadyExists = cartItems.find(item=>item.id === product.id)
    if(alreadyExists){
      alert("Item already added to the cart")
    }else{
      setCartItems(item=>[...item,product])
    }
   }
console.log(cartItems,"cartItems");

  return (
    <>
      <div className=''>
        <Header count={cartItems.length}/>
        <Banner/>
        <Card onAddtoCard={inceaseCounr}/>
      </div>
    </>
  )
}

export default App
