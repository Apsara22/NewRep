import  { useState } from 'react';
import Home from '../components/Home';


export default function Respocss(){
    const[count,SetCount] = useState(0)
    return(

        <div className="App">
        <Home/>
        <div className='w-full h-screen'></div>

        </div>
    )
}