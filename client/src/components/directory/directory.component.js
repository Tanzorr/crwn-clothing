import React, {Component} from 'react';
import {connect} from 'react-redux'
import './directory.style.scss';
import MenuItem from "../menu-item/menu-item";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";


const DirectoryComponent = ({sections})=>{
    return (
            <div className='directory-menu'>
                {sections.map(({ id, ...otherSectionProps})=>{
                    return <MenuItem key={id} {...otherSectionProps}/>
                })}
            </div>
        );

}

const mapStateToProps= createStructuredSelector({
        sections: selectDirectorySections
})

export default  connect(mapStateToProps)(DirectoryComponent);