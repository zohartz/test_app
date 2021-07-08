import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState(); // full list 
  const [countryList, setCountryList] = useState(); // list to show

//   const fetchData = async () => {
//     console.log("in fatch data")
//     return await fetch('https://restcountries.eu/rest/v2/all')
//       .then(response => response.json())
//       .then(data => {
//          setCountryList(data) 
//          setCountryListDefault(data)
//        });}
   
    const fetchData = async () => {
        try{ 
            console.log("in fatch data")
            const result =  await fetch('https://restcountries.eu/rest/v2/all')
            const data = await result.json()
            setCountryList(data) 
            setCountryListDefault(data)
        } catch(e){
            console.log(e)
        }
        
    }

    
  const updateInput = async (input) => {
      console.log("in update")
      // loops on each counter from countery list and check if con
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  // happens only once since it empty list
  useEffect( () => {fetchData()},[]);
  useEffect (()=>{
    console.log('in useEffect')
},[countryList])
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage