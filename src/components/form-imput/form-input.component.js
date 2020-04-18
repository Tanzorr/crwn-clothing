import React from "react";
import "./form-input.style.scss"


const FormInput=({handleChange, label,...otherProps})=>(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} type="text"/>
        {
            label ?
                (<label htmlFor="" className={`${otherProps.value.length ?'shrink':''}form-imput`}>
                    {label}
                </label>)
                :null
        }
    </div>
)

export default FormInput