import {combinedReducers} from 'redux';
import promoCodeReducer from './promoCodeReducer';

export default combinedReducers({
  promoCode: promoCodeReducer
});
