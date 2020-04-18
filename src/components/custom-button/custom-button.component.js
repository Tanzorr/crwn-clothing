import React  from "react";

import "./custom-button.style.scss"


const CustomButton = ({children, isCoogleSignIn, ...otherProps})=>(
    <button className={`${isCoogleSignIn ? 'google-sign-in':''} custom-button`}{...otherProps}>
        {children}
    </button>
)

export default CustomButton