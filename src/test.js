import React, { useEffect, useState } from 'react';

const Test = (props) =>{
    const [counter , setCounter] = useState(0)
    const [test , setTest] =  useState({})
    //const [counter , setCounter] = useState(false)

    const handleClick = (e,parm) =>{
        console.log(e);
        console.log(parm);
        setTest((prev) => ({
            ...prev , 
            b :"hh"
        }))
        console.log(test);
        // setCounter(c => {
        //     console.log(`count ${c}`)
        //     c++
        // })
        // setCounter((prevState) => {
        //     //console.log(`prev ${prevState++}`)
        //     prevState++
        //   });
        setCounter(prevState => prevState+1)

        console.log(counter)
    }
    useEffect(()=>{
        console.log(`updated ${test}`)
    },[test])

    useEffect(()=>{
        console.log(`props ${JSON.stringify(props.myprop)}`)
    },[props])
    return (
        <>
    <button onClick= {(e) => handleClick(e,'test')}>Click</button>
    <div> childern {props.children}</div>
    </>
    )

}
export default Test
