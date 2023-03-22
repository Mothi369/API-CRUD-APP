import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createName, getData, getNames, removeName } from './api'
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
import Loading from './Loading'
import "./index.css"

import { toast } from 'react-toastify'
import FormElement from './Form'
import Update from './Update'

const Crud = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [website,setWebsite]=useState("")

    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])

    useEffect(()=>{
        loadNames()
        loadMails()
        loadPhone()
        loadWebsite()
    },[])

    const loadNames=()=> getData().then((name)=>setData(name.data))
    const loadMails=()=> getData().then((email)=>setData(email.data))
    const loadPhone=()=> getData().then((phone)=>setData(phone.data))
    const loadWebsite=()=> getData().then((website)=>setData(website.data))

    //console.log("process.env.REACT_APP_API",process.env.REACT_APP_API)
    //clear entered data
    const clearData=()=>{
        setName("")
        setEmail("")
        setPhone("")
        setWebsite("")
    }
    //posting Data
    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        createName({name,email,phone,website}).then((res)=>{
            setLoading(false)
            setName("")
            setEmail("")
            setPhone("")
            setWebsite("")
            toast.success(`${res.data} is created `)
            loadNames()
            loadMails()
            loadPhone()
            loadWebsite()
        }).catch((err)=>{
            setLoading(false)
            if(err.response.status===400)  toast.error(err.response.data)

        })
        
        
    }
    //delete name
    const handleRemove=(id,name)=>{
        if(window.confirm("Are you sure you want to delete this data?")){
            setLoading(true) 
            removeName(id).then((res)=>{
               setLoading(false)
               toast.error(`${name} is deleted`)
               loadNames()
            }).catch((err)=>{
                if(err.response.status === 400){
                    setLoading(false)
                    toast.error(err.response.data)
                } 
            })
        }
        
    }
  
    return(
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    {loading ? (
                        <Loading/>
                        ):(
                        <>
                            <h4 className="m-4 p-3 bg-light bg-gradient border border-3  border-success">Add New Post Details</h4>
                            {/* Sending props and props as methods to FormElement */}
                            <FormElement handleSubmit={handleSubmit} clearData={clearData} name={name}  setName={setName} email={email} setEmail={setEmail}
                                phone={phone} setPhone={setPhone} website={website} setWebsite={setWebsite}/> 
                                <br/>
                            
                            {data && data.map((ele) => (
                                <div className='form_body'>
                                <div key={ele.id} className="border column mx-2 align-items-center">
                                    <span>
                                    <ul className="list-group">
                                        <li className="list-group-item">{ele.name}</li>
                                        <li className="list-group-item">{ele.email}</li>
                                        <li className="list-group-item">{ele.phone}</li>
                                        <li className="list-group-item">{ele.website}</li>
                                        
                                    </ul></span>
                                     <span onClick={() => handleRemove(ele.id,ele.name)}
                                        className="btn btn-lg float-right">
                                        <DeleteOutlined className='text-danger' />
                                    </span>
                                    
                                    <span className="btn btn-lg float-right">
                                        <Link to={`/update/${ele.id}`}>
                                            <EditOutlined className='text-warning' />
                                        </Link>     
                                    </span>
                                    
                                </div>
                                <br/>
                                </div>
                            ))}
                         </> 
                    )}  
                </div>
            </div>
        </div>
        
    )
}

export default Crud