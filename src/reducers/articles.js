import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const  articles = (state = initialState, action) =>{
    // look for spred insted 
  if (action.type === ADD_ARTICLE) {
      return {
          ...state , 
          articles: state.articles.concat(action.payload)
      }
    // return Object.assign({}, state, {
    //   articles: state.articles.concat(action.payload)
    // });
  }
  return state;
}

export default articles;





