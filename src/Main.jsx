import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    const[stories,setStories]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/stories')
        .then((r)=>{
            setStories(r.data)
        })
    },[])
  return (
    <div>
        <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center'}}>
            {stories.map((x,index)=>{
                return(
                    <div key={index} style={{height:'400px',marginRight:'20px'}}>
                    <img src={x.image} alt="" width={200} height={200}/>
                    <h6>{x.title}</h6>
                    <Link to={`/sub/${x.id}`}>View Story</Link>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Main