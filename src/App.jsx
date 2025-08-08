import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import Card from './card'
import CartModel from './components/cartModel'

function App() {
  const [cartItems, setCartItems] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const inceaseCounr=(product)=>{
    const alreadyExists = cartItems.find(item=>item.id === product.id)
    if(alreadyExists){
      alert("Item already added to the cart")
    }else{
      setCartItems(item=>[...item,product])
    }
   }
   const removeItems=(id)=>{
    setCartItems(item=>item.filter(item=>item.id !==id))
   }

  return (
    <>
      <div className=''>
        <Header count={cartItems.length} onCartClick={() => setShowCart(true)}/>
        <Banner/>
        <Card onAddtoCard={inceaseCounr}/>
        {/* <CartModel products={cartItems}/> */}
        {showCart && (
        <CartModel 
          cartItems={cartItems} 
          onClose={() => setShowCart(false)} 
          onRemove={removeItems}
        />
      )}
      </div>
    </>
  )
}

export default App
