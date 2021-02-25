import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem'

const Collection = ({ title , items}) => {
    console.log(items);
    return (
        <div className = "collection-preview">
            <h1 className = "title">{title}</h1>
             <div className = "preview">
               {items.filter((item,idx) =>idx < 4).map((item) => <CollectionItem key = {item.id}  item = {item} />)}
             </div>

        </div>
    )
}

export default Collection;