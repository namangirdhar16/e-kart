import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { BrowserRouter, Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/CollectionPage';


const  ShopPage = ({ match }) => {


     // console.log(match);
   
        return (
            <div className = "shop-page">
                 <Route exact path={`${match.path}`} component={CollectionOverview} />
                 <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    
}


export default ShopPage;