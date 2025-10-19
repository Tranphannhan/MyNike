import storage from 'redux-persist/lib/storage'; // localStorage
import { PersistConfig } from 'redux-persist';
import { CartState } from '../cart/cartSlice';



const persistConfig: PersistConfig<CartState> = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export default persistConfig;
