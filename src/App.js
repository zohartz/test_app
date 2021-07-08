import React from 'react';
import './App.css';
//import SearchPage from './Components/SearchPage.js';
import SearchPage from '../src/SearchPage';
import Test from '../src/test'
import store from '../src/store'
import List from "./List";
import Form from "./Form";
import Comments from './components/comments'


import { Provider } from 'react-redux';

const App = () =>{
return (
  <Provider store={store}>
    <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </>
  </Provider>
);
}

// const App = () =>{
//     return (
//       <Test myprop ="hh">
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//       </Test>
//     );

// }

// const App = () =>{
//   return (
//     <div className="App">
//       <SearchPage /> 
//     </div>
//   );
// }

// const App = () =>{
//   return(
//   <Comments/>
//   )
// }

export default App;