
import { Input } from 'antd'
import React from 'react'

const FormElement = ({ handleSubmit,name,setName,email,setEmail,phone,setPhone,website,setWebsite,clearData }) => {
    return(
        <div className="container bg-secondary p-3 text-white">
            
                <div className="col-md-12 ">
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                            <div className='row'>
                                <div className="col-md-6">
                                    <div className='mb-3'>
                                        <label className='h5 form-label'>Name</label>
                                        <Input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3'>
                                        <label className='h5 form-label'>Email</label>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3'>
                                        <label className='h5 form-label'>Phone</label>
                                        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone number" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3'>
                                        <label className='h5 form-label'>Website</label>
                                        <input type="text" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Enter Website" required/>
                                    </div>
                                </div>


                            </div>
                            <button type="submit" className="btn btn-primary btn-lg mt-1" style={{ marginRight: "20px" }}>Submit</button>
                            <button className="btn btn-danger btn-lg mt-1" onClick={clearData}>Cancel</button>
                        </div>
                    </form>
                </div>
            
        </div>
    )
  
}

export default FormElement