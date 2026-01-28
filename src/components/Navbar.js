import React from 'react'
import bag from '../icons/bag.svg'
import { useGlobalContext } from '../context'

function Navbar() {
    const {amount}=useGlobalContext();
  return (
    <nav>
        <div className="nav-center">
            <h3>Adela's</h3>
            <div className="nav-container">
                <img src={bag} alt="" />
                <div className="amount-container">
                    <p className="total-container">{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
