import React from 'react';
import './CollectionPage.scss';
import { connect } from 'react-redux';
import { selectCollection, selectCollections } from '../../redux/selectors/shopSelector';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection , match} ) => {

    //console.log(match.params.collectionId[0].toUpperCase());
    console.log(collection);
    return (
        <div className = "collection-page">
            
            <h2 className = "title">{collection.title}</h2>
            <div className = "items">
            {
              collection.items.map((item)=><CollectionItem key = {item.id} item = {item} />)
            }
            </div>
            
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);
