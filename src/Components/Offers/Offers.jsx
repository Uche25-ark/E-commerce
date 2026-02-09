import React from 'react'
import './Offers.css'
import special_offers from '../Assets/special_offer.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Special Offers</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={special_offers} alt="" />
        </div>
    </div>
  )
}

export default Offers
