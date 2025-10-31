import React from 'react'
import { Card } from '../../components/user/Card'
import { useEffect } from 'react'
import { axiosInstance } from '../../axios/axiosInstance'
import { customeradd, listCustomers } from '../../services/customerlistservices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Customerlistpage = () => {

    const [customers, setCustomers] = useState([])

    const navigate =useNavigate()

    useEffect(() => {
        listCustomers().then((res) => {
            console.log(res)
            setCustomers(res.data)
        }).catch((err) => console.log(err))
    }, [])

    const [formData, setFormData] = useState({
            name: customers.name || "",
            phone: customers.phone || "",
            contactinfo: customers.contactinfo || "",
            status: customers.status || "",
        });

    const onSubmit =()=>{
                customeradd(formData).then((res)=>{
                    console.log(res)
                    alert("Update successfull")
                    navigate("/customers/list")
                }).catch(err=>{
                    console.log(err,"error")
                    alert(err.response.data.error)
                   
                })
                
            }

    return (<div>

        <div>
            <div className='p-10'>
                <button className="btn btn-block btn-warning" onClick={() => document.getElementById('modalId').showModal()}>Add New Customer</button>
                <dialog id="modalId" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <div>
                                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                        <legend className="fieldset-legend">Page details</legend>

                                        <label className="label">Name</label>
                                        <input type="text" className="input" name="name" onChange={(e) => {
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }} />
                                        <label className="label">Phone</label>
                                        <input type="text" className="input"  name="phone" onChange={(e) => {
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }} />
                                        <label className="label">Contact Info</label>
                                        <input type="text" className="input"  name="contactinfo" onChange={(e) => {
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }} />
                                        <label className="label">Status</label>
                                        <input type="text" className="input"  name="status" onChange={(e) => {
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }} />

                                    </fieldset>
                                </div>
                                <button className="btn" onClick={onSubmit}>Submit</button>
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                customers && customers.map((customers, id) => {
                    return <Card key={id} customers={customers} />

                })
            }



        </div>
    </div >


    )
}
