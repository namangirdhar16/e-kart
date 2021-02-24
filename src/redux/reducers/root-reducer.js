import { combineReducers } from 'redux';

import userReducer from './userReducer';
import cartReducer from './cartReducer';
import directoryReducer from './directoryReducer'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ShopReducer } from './ShopReducer';


const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
}
const rootReducer =  combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer,
   shop: ShopReducer
})


export default persistReducer(persistConfig, rootReducer);