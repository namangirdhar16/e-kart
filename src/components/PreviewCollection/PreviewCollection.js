import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { withRouter } from 'react-router-dom';

const Collection = ({ title , items , match , history }) => {
    // console.log(items);
    // console.log(match);
    return (
        <div className = "collection-preview">
            <h1 className = "title" onClick = {() =>history.push(`${match.path}/${title.toLowerCase()}`)}>{title}</h1>
             <div className = "preview">
               {items.filter((item,idx) =>idx < 4).map((item) => <CollectionItem key = {item.id}  item = {item} />)}
             </div>

        </div>
    )
}

export default withRouter(Collection);