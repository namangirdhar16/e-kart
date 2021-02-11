import React from 'react';
import './MenuItem.scss';

const MenuItem = (props) => {
    return (
        <div style = {{
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: 'cover',

        }} className = {`${props.size} menu-item`} >
             <div className = "content">
                <h1 className = "title">{props.title}</h1>
                <span className = "sub-title">SHOP NOW</span>
             </div>
       </div>
    )
}
export default MenuItem;