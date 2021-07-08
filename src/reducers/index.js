import articles from './articles'
import {combineReducers} from 'redux'

// const rootReducer = combineReducers({
//   article
// })

//import { ADD_ARTICLE } from "../constants/action-types";

// const initialState = {
//   articles: []
// };

// function rootReducer(state = initialState, action) {
//     // look for spred insted 
//   if (action.type === ADD_ARTICLE) {
//       return {
//           ...state , 
//           articles: state.articles.concat(action.payload)
//       }
//     // return Object.assign({}, state, {
//     //   articles: state.articles.concat(action.payload)
//     // });
//   }
//   return state;
// }

const rootReducer = combineReducers({
  articles,
})


export default rootReducer;