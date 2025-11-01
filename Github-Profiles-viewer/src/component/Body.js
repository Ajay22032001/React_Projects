import React, { useEffect, useState } from 'react'
import '../style.css'
const Body = () => {

    const [Profile, setProfile] = useState([]);
    const [numofProfile,setNumofProfile] = useState("");
 
    async function generateProfile(count){
        
        try{
            const ran = Math.floor(1+Math.random()*100);
            const res = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await res.json();
            setProfile(data);
        }
        catch(err){
            alert("try after some time");
            console.log(err);
            
        }
        

        
    }

    useEffect(()=>{
        generateProfile(10);
    },[])

  return (
    <div>
    <div className='but'>
        <input type='text' className='inpu' placeholder='search here' value={numofProfile} onChange={(e)=>setNumofProfile(e.target.value)}></input>
        <button onClick={()=>generateProfile(Number(numofProfile))}>Search Profile</button>
    </div>
        <div className='profiles'>
        {
            Profile.map((val,index)=>{
                return (<div key={val.id} className='cards'>
                    <img src={val.avatar_url}/>
                    <h2>{val.login}</h2>
                    <a href={val.html_url} target='_blank'>Profile</a>
                </div>
                )
            })
        }
    </div>
    </div>
    
  )
}

export default Body