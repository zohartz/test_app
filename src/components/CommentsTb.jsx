import React from 'react'; 
import './style.css';

const CommentsTb =  (props) =>{
    const {data } = props ;
    const columns = data[0] && Object.keys(data[0]);
    return(
    <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{data[0] && columns.map(col =><th>{col}</th>)}</tr>
        </thead>
        <tbody>
            {
                data.map(row =>
                    <tr>
                        { columns.map(col => <td>{row[col]}</td>)}
                    </tr>
                )
            }
        </tbody>
    </table>)

}
export default CommentsTb