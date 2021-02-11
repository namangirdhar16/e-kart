import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => {
    return (
        <div className = {`${props.size} menu-item`} onClick = {() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
             <div style = {{
            backgroundImage: `url(${props.imageUrl})`,
            

        }} className = "background-image"></div>
             <div className = "content">
                <h1 className = "title">{props.title}</h1>
                <span className = "sub-title">SHOP NOW</span> 
             </div>
       </div>
    )
}

export default withRouter(MenuItem);