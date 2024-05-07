import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>An E-commerce website is online platform that facilitates buying and salling of products or services over the Internet as a virtual marketplace where businesses and individual businesses showcase their products, interacts with customers, and conduct transactions without the need of a feasible presence. E-commerce website have gained immense popularity due to their convenience, accessibility, and the global reach their offers.</p>
            <p>An E-commerce website typically displays products on services and detailed descriptions, images, prices, and any available variable (e.g. sizes, colors). Each product usually has its own properties with its relevant information.</p>
        </div>

    </div>
  )
}

export default DescriptionBox