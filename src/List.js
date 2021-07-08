import React from "react";
import { connect , useSelector} from "react-redux";

// const mapStateToProps = state => {
//   return { articles: state.articles };
// };

//const List = ({ articles }) => {
const List = () => {
  // map state to props
  const articles = useSelector(state => state.articles)
  console.log("test art")
  console.log(articles)

  return(
    <ul>
      {articles.articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  )};


//export default connect(mapStateToProps)(List);

// const List = connect(mapStateToProps)(ConnectedList);

export default List;