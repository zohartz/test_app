//import React, { Component } from "react";
import React , {useState} from "react"
import { connect } from "react-redux";
import { addArticle } from "../src/actions";
import {useSelector, useDispatch} from 'react-redux'



// const actionCreators = {
//     addArticle
// }

const Form = (props) =>{
  //const articles = useSelector(state => state.articles)
  // map dispatch to props
  const dispatch = useDispatch()

    const [title , setTitle] = useState("");

    const handleChange = (event) =>{
        console.log(event.target.id);
        setTitle(event.target.value );
      }
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addArticle({ title }))
        //props.addArticle({ title });
        setTitle("");
      }
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    )
}
export default Form;
// export default connect(
//     null,
//     actionCreators
//   )(Form);

// function mapDispatchToProps(dispatch) {
//   return {
//     addArticle: article => dispatch(addArticle(article))
//   };
// }

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const { title } = this.state;
//     this.props.addArticle({ title });
//     this.setState({ title: "" });
//   }
//   render() {
//     const { title } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type="submit">SAVE</button>
//       </form>
//     );
//   }
// }

// const Form = connect(
//     null,
//     actionCreators
//   )(ConnectedForm);
// const Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm);

