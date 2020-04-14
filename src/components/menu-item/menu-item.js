import React from "react";

import "./menu-item.styles.scss"

const MenuItem = ({title, image, size})=>{
    console.log("size",size)
    return<div className={`menu-item ${size}` } >
        <div className="background-image" style={{
            background:`url(${image})`
        }}>

        </div>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
         </div>
}

export default MenuItem
