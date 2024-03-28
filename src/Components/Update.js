import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userDetailsSlice';

export const Update = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user ,loading} = useSelector((state) => state.app);
     const [data,setData] = useState()
     
  useEffect(()=>{
    if(id){
        const singleUser = user?.filter((ele) => ele?.id === id);
        setData(singleUser[0])
    }
  
  },[])
  const  getUser =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
          e.preventDefault()
          dispatch(updateUser(data))
          navigate('/read')
    }
  return (
   <>
      <form className='w-50 mx-auto my-5' onSubmit={handleSubmit} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name='name' value={data?.name} onChange={getUser}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" name='email' value={data?.email} onChange={getUser}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text" class="form-control" name='age' value={data?.age} onChange={getUser}/>
  </div>
  <div class="mb-3">
  <input class="form-check-input" type="radio" name='gender' value='Male' checked={data?.gender === 'Male'} onChange={getUser}/>
  <label class="form-check-label" >
    Male
  </label>
</div>
<div class="mb-3">
  <input class="form-check-input" type="radio" name='gender' value='Female' checked={data?.gender === 'Female'}  onChange={getUser}/>
  <label class="form-check-label" >
    Female
  </label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
   </>
  )
}
