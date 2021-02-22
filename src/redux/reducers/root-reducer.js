import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
}
const rootReducer =  combineReducers({
   user: userReducer,
   cart: cartReducer,
})


export default persistReducer(persistConfig, rootReducer , (persistObj) => {
     console.log('Rehydration Complete!!');
     console.log(persistObj);
});