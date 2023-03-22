import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {  getEmail, getName, getPhone, getWebsite, updateName } from './api'
import FormElement from './Form'
import Loading from './Loading'

const Update = ({ history,match }) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [website,setWebsite]=useState("")

    const [loading,setLoading]=useState(false)

    const loadName=()=>{
        getName(match.params.id).then((d)=> setName(d.data.name))
    }
     const loadEmail=()=>{
        getEmail(match.params.id).then((d)=> setEmail(d.data.email))
    }
    const loadPhone=()=>{
        getPhone(match.params.id).then((d)=> setPhone(d.data.phone))
    }
    const loadWebsite=()=>{
        getWebsite(match.params.id).then((d)=> setWebsite(d.data.website))
    } 

    useEffect(()=>{
        loadName()
        loadEmail()
        loadPhone()
        loadWebsite()
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        updateName(match.params.id, {name,email,phone,website}).then((res)=>{
            setLoading(false)
            setName("")
            setEmail("")
            setPhone("")
            setWebsite("")

            toast.success(`${res.data} is updated`)
            history.push("/")

        }).catch((err)=>{
            setLoading(false)
            if(err.response.status === 400)  toast.error(err.response.data)
        })
    }

    const clearData=()=>{
        setName("")
        setEmail("")
        setPhone("")
        setWebsite("")
    }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
               {loading ? <Loading/> :<h4 className="m-4  p-2 border border-3  border-warning">Update Details</h4>} 
               <FormElement handleSubmit={handleSubmit} clearData={clearData} 
                    name={name} setName={setName}
                    email={email} setEmail={setEmail}
                    phone={phone} setPhone={setPhone} 
                    website={website} setWebsite={setWebsite} />
            </div>
        </div>
        
    </div>
  )
}

export default Update