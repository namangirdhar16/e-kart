import React from 'react';
import SHOP_DATA from './ShopData';

import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
class ShopPage extends React.Component{

    
    state = {
        collections: SHOP_DATA
    }

    render()
    {   
        const { collections } = this.state;
        return (<div className = "shop-page">
            {
                collections.map(({id , ...otherCollectionProps }) => (
                    <PreviewCollection key = {id}  {...otherCollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;