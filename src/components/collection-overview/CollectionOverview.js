import React from 'react';
import { createStructuredSelector } from 'reselect';
import './CollectionOverview.scss';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import { selectCollections } from '../../redux/selectors/shopSelector';
import { connect } from 'react-redux';



const CollectionOverview = ({ collections }) => {

    return (<div className = "collection-overview">
    {
        collections.map(({id , ...otherCollectionProps }) => (
            <PreviewCollection key = {id}  {...otherCollectionProps} />
        ))
    }
</div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
