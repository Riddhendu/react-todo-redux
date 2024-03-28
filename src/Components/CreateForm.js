import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/userDetailsSlice'
import { useNavigate } from 'react-router-dom'

export const CreateForm = () => {
    const [user,setUser] = useState({})
    
   const  getUser =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
       e.preventDefault()
       dispatch(createUser(user))
      navigate('/read')
    }
  return (
    <>
     <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name' onChange={getUser}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" name='email' onChange={getUser}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text" class="form-control" name='age' onChange={getUser}/>
  </div>
  <div class="mb-3">
  <input class="form-check-input" type="radio" name='gender' value='Male' onChange={getUser}/>
  <label class="form-check-label" >
    Male
  </label>
</div>
<div class="mb-3">
  <input class="form-check-input" type="radio" name='gender' value='Female'  onChange={getUser}/>
  <label class="form-check-label" >
    Female
  </label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}
