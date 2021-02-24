import React from 'react';
import SHOP_DATA from './ShopData';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/selectors/shopSelector';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
const  ShopPage = ({collections}) =>{

    
    
   
        return (<div className = "shop-page">
            {
                collections.map(({id , ...otherCollectionProps }) => (
                    <PreviewCollection key = {id}  {...otherCollectionProps} />
                ))
            }
        </div>)
    
}
const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
)

export default connect(mapStateToProps , {})(ShopPage);