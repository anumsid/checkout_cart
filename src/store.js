 //import createStore applyMiddleWare

 import {createStore, applyMiddleware, compose} from 'redux';
 import thunk from 'react-thunk';
 import rootReducer from './reducers';

 const initialState = {};
 const middleware = [thunk];

 const store = createStore(
   rootReducer,
   initialState,
   compose(
     applyMiddleWare(...middleware),
     window.devToolExtension ? window.devToolExtension() :
     f => f
   )
 );

 export default store;
