import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = ({ articles }) => {
  return(
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  )};


export default connect(mapStateToProps)(List);

// const List = connect(mapStateToProps)(ConnectedList);

// export default List;