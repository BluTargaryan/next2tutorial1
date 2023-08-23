"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

export default function FormPost(){
    const [title, setTitle] = useState("")
    const router = useRouter()
    //create a submit post
    async function submitPost(e:React.FormEvent){
        e.preventDefault()
        const data = await fetch(`/api/createPost`,{
            method:"POST",
            body:JSON.stringify({title}),
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message)
    }

    return (
        <form onSubmit={submitPost}>
            <input 
            type="text" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
            <button type='submit'>Make a new post</button>
        </form>
    )
}