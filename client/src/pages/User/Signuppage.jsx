import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userSignup } from '../../services/customerlistservices'
import { toast } from 'react-toastify'

export const Signuppage = () => {
    const [values,setValues]= useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmpasworrd:''

    })
    const navigate = useNavigate()
    const onSubmit =()=>{
        userSignup(values).then((res)=>{
            console.log(res)
            alert("Signup successfull")
            navigate("/login")
        }).catch(err=>{
            console.log(err,"error")
            alert(err.response.data.error)
           
        })
        
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name='name' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }} />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }}/>
                                <label className="label">Phone</label>
                                <input type="tel" className="input" placeholder="phone" name='phone' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }}/>
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }} />
                                <label className="label">Confirm Password</label>
                                <input type="password" className="input" placeholder="Confirm Password" name='confirmpasworrd' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }} />
                                <button className="btn btn-neutral mt-4" onClick={onSubmit}>Sign up</button>
                                <div className='text-center'>
                                    If you already have an account <Link to={"/login"} className='text-red-600'>Login</Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
