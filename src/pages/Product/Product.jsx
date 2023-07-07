import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";


const Product = () => {
  window.scrollTo(0, 0);
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantily, setQuantily] = useState(1)
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb$w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ]

  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Title</h1>
          <span className='price'>$199</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis saepe quibusdam, natus laboriosam dignissimos quaerat
            sapiente incidunt similique ullam numquam alias repudiandae! Harum
            reiciendis eveniet architecto aliquam asperiores nihil explicabo!
          </p>
          <div className="quantily">
            <button onClick={() => setQuantily((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantily}
            <button onClick={() => setQuantily((prev) => prev + 1)}>+</button>
          </div>
          <button className='add'>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Product