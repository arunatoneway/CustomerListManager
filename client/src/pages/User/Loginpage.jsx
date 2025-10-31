import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/customerlistservices'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../redux/features/userSlice'

export const Loginpage = () => {

    const dispatch = useDispatch()

    const [values,setValues]= useState({
            email:'',
            password:'',
    
        })
        const navigate = useNavigate()
        const onSubmit =()=>{
            userLogin(values).then((res)=>{
                console.log(res)
                alert("Login successfull")
                dispatch(saveUser(res.data.userExist))
                navigate("/")
            }).catch(err=>{
                console.log(err,"error")
                alert(err.response.data.error)
               
            })
            
        }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email"  name='email' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }}/>
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password"  name='password' required onChange={(e)=>{
                                    setValues({...values,[e.target.name]:e.target.value})
                                }}/>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4" onClick={onSubmit}>Login</button>
                                <div className='text-center'>
                                    Don't have an account <Link to={"/signup"} className='text-red-600'>Sign up</Link>
                                </div>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
