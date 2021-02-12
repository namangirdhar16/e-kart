import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem'

const Collection = ({ title , items}) => {

    return (
        <div className = "collection-preview">
            <h1 className = "title">{title}</h1>
             <div className = "preview">
               {items.filter((item,idx) =>idx < 4).map(({ id , ...otherProps }) => <CollectionItem key = {id}  {...otherProps} />)}
             </div>

        </div>
    )
}

export default Collection;