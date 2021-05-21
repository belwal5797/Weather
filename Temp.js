import React, { useEffect, useState } from 'react';
import './index.css';



const Temp=()=>{

  const [city,setCity]= useState(null);
  const [search,setSearch]=useState('delhi');

  useEffect(()=>{
    
      const fetchApi=async()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=01bf1ab6b24523d1d3ef592b92991ecd`;
        const response=await fetch(url);
        
        const resJson=await response.json();
        console.log(resJson);

        setCity(resJson.main);
      };

      fetchApi();
  },[search])

    return(

   <>
    <h1 id='t'>GET YOUR CITY TEMPERATURE:</h1>
     <input type='search' value={search} onChange={(event)=>{
                 setSearch(event.target.value);
     }
     }/>

     <br/><br/>


         {!city ? (
       <p id='p'>No Data Found !!!</p>
     ):(<div id='d'>
         <h1 id='s'>{search}</h1><br/><br/>
         <h1 id='gt'>{city.temp} Cel</h1>
         </div>)

}
     

   </>

    );
}

export default Temp;
