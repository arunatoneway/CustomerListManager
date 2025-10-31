import React from 'react'
import { useState } from 'react';
import { customerdelete, customerUpdate } from '../../services/customerlistservices';
import { useNavigate } from 'react-router-dom';

export const Card = ({ customers }) => {

    const navigate = useNavigate()

    



    const modalId = `modal-${customers.id || customers._id}`;

    const [formData, setFormData] = useState({
        name: customers.name || "",
        phone: customers.phone || "",
        contactinfo: customers.contactinfo || "",
        status: customers.status || "",
    });
    const onSubmit =()=>{
            customerUpdate(formData,customers._id).then((res)=>{
                console.log(res)
                alert("Update successfull")
                navigate("/customers")
            }).catch(err=>{
                console.log(err,"error")
                alert(err.response.data.error)
               
            })
            
        }

    const handledelete =()=>{
        customerdelete(customers._id).then((res)=>{
                console.log(res)
                alert("Deleted successfully")
                navigate("/customers")
            }).catch(err=>{
                console.log(err,"error")
                alert(err.response.data.error)
               
            })

    }
    return (
        <div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">{customers.name}</h2>
                    <h2 className="card-title">{customers.phone}</h2>
                    <h2 className="card-title">{customers.contactinfo}</h2>
                    <h2 className="card-title">{customers.status}</h2>
                    <div className="card-actions justify-end">
                        <div>
                            <button className='btn btn-secondary' onClick={handledelete}>Delete</button>

                        </div>
                        <div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" id={`buttn-${customers.id}`} onClick={() => document.getElementById(modalId).showModal()}>Edit</button>
                            <dialog id={modalId} className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <div>
                                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                                    <legend className="fieldset-legend">Page details</legend>

                                                    <label className="label">Name</label>
                                                    <input type="text" className="input" value={formData.name} name="name" onChange={(e) => {
                                                        setFormData({ ...formData, [e.target.name]: e.target.value })
                                                    }} />
                                                    <label className="label">Phone</label>
                                                    <input type="text" className="input" value={formData.phone} name="phone" onChange={(e) => {
                                                        setFormData({ ...formData, [e.target.name]: e.target.value })
                                                    }} />
                                                    <label className="label">Contact Info</label>
                                                    <input type="text" className="input" value={formData.contactinfo} name="contactinfo" onChange={(e) => {
                                                        setFormData({ ...formData, [e.target.name]: e.target.value })
                                                    }} />
                                                    <label className="label">Status</label>
                                                    <input type="text" className="input" value={formData.status} name="status" onChange={(e) => {
                                                        setFormData({ ...formData, [e.target.name]: e.target.value })
                                                    }} />

                                                </fieldset>
                                            </div>
                                            <button className="btn"onClick={onSubmit}>Submit</button>
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
