import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Sub = () => {
    const[stories,setStories]=useState({})
let {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/stories/${id}`)
        .then((r)=>{
            setStories(r.data)
        })
    },[])
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <div style={{width:'500px'}}>
                <img src={stories.image} style={{width:'100%'}} alt="" />
                <h3 style={{textAlign:'center'}}>{stories.title}</h3>
                <p style={{textAlign:'center'}}>{stories.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Sub