import React from "react";
import "./colection-priview.style.scss"
import CollectionItem from "../colection-item/colection-item.component";


const ColectionsPriview =({title, items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview' >
            {items.map(({id,...otherItemProps})=>(
                <CollectionItem key={id}{...otherItemProps}/>
            ))
            }
        </div>
    </div>
)

export default ColectionsPriview
