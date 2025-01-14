import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from "react-router";
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const [emailId, setEmailId] = useState("Dinky@gmail.com");
  const [password, setPassword] = useState("Dinky@123");
  const dispatch = useDispatch()
  const navigate=useNavigate();

  

  
  const HandleLogin= async ()=>{
    try{
      const res= await axios.post(BASE_URL+ "/login", {emailId, password}, {withCredentials:true});
      dispatch(addUser(res.data))
      console.log(res.data);
      navigate('/')
    }

    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='justify-center flex'>
    <div className="card bg-base-200 w-96 shadow-xl m-4">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">E-mail ID </span>
  </div>
  <input type="text" value={emailId} onChange={(e)=> setEmailId(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  <div className="label mt-4">
    <span className="label-text">Password</span>
  </div>
  <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

</label>
    </div>
    <div className="card-actions justify-center mt-4">
      <button className="btn btn-primary" onClick={HandleLogin}>Submit</button>
    </div>
  </div>
</div></div>
  )
}

export default Login