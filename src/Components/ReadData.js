import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../features/userDetailsSlice';
import  CustomModal  from './CustomModal';
import { Link } from 'react-router-dom';

export const ReadData = () => {
    const dispatch = useDispatch();
   
    const [id,setId] = useState()
    const [radiodata,setRadiodata] = useState('')
    const [showpopup, setShowpopup] = useState(false)
    useEffect(() => {
        dispatch(getUser());
    }, []);

    let {user, loading,searchData} = useSelector((state)=>state.app)

    if (loading) {
        return (
            <>
                <h2>Loading.........</h2>
            </>
        );
    }

    return (
        <>
  
        {showpopup && <CustomModal id={id} show={showpopup} setShowPopup={setShowpopup}/>}
            <h2>All Data</h2>
            <input class="form-check-input" type="radio"  checked={ radiodata === ''}/>
  <label class="form-check-label" >
    All
  </label>
  <input class="form-check-input" type="radio"  value='Male' checked={ radiodata === 'Male'} onChange={(e)=>setRadiodata(e.target.value)}/>
  <label class="form-check-label" >
    Male
  </label>
  <input class="form-check-input" type="radio"  value='Female' checked={ radiodata === 'Female'} onChange={(e)=>setRadiodata(e.target.value)}/>
  <label class="form-check-label" >
    Female
  </label>
            {user &&  user?.filter((data)=>(
                // console.log('data============>',searchData)
                searchData?.length === 0 ? data : data?.name?.toLowerCase().includes(searchData?.toLowerCase())
            )).filter((data)=>{
                if(radiodata === ''){
                    return data
                }else if(radiodata === 'Male'){
                    return data.gender === 'Male'
                }else if(radiodata === 'Female'){
                    return data.gender === 'Female'
                }

}).map((data) => 
            {
                return (
                    <> 
                       <div key={data?.id} className="card w-50 mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">{data?.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data?.email}</h6>
                        <p className="card-text">{data?.age}</p>
                        <p className="card-text">{data?.gender}</p>
                        <button  class="btn btn-primary"  onClick={()=>[setId(data.id),setShowpopup(true)]}>View</button>
                        <Link to={`/update/${data.id}`} class="btn btn-primary">Edit</Link>
                        <Link onClick={()=>dispatch(deleteUser(data.id))} class="btn btn-primary">Delete</Link>
                    </div>
                </div>
                    </>
                )
            }
              
            )}
        </>
    );
};
