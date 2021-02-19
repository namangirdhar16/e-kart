import React from 'react';

import './CollectionItem.scss';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart';

const CollectionItem = (props) => 
{   
    console.log(props);
    const item = props.item;
    const { imageUrl , name , price , id } = props.item;
    return (
    <div className = "collection-item">
        <div className = "image" style = {{
            backgroundImage: `url(${imageUrl})`
        }}>
        <div className = "collection-footer">
            <span className = "name">{name}</span>
            <span className = "price">{price}</span>
        </div>
        <CustomButton inverted = "true" onClick = {()=>props.addItem(item)}>Add to Cart</CustomButton>
        </div>
    </div>)
}

export default connect(null , { addItem } )(CollectionItem);