import React from 'react';

// gets input and onChange method (which filter data by keywords)
const SearchBar = ({keyword,onChange}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search country"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar