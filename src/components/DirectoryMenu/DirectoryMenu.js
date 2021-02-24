import React from 'react';
import { connect } from 'react-redux';
import { selectSections } from '../../redux/selectors/directorySelector';
import MenuItem from '../MenuItem/MenuItem';
import { createStructuredSelector } from 'reselect';
import './DirectoryMenu.scss';



const DirectoryMenu = ({ sections }) => {

    
    
        return (
            <div className = "directory-menu">
            {sections.map((section) => (
                <MenuItem title = {section.title.toUpperCase()} key = {section.id} imageUrl = {section.imageUrl} size = {section.size} linkUrl ={section.linkUrl} />)
            )}
        </div>
        )
      
    
}

const mapStateToProps = createStructuredSelector({
   sections: selectSections
})
export default connect(mapStateToProps , { })(DirectoryMenu);