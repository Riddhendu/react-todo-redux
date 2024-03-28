import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUsers } from '../features/userDetailsSlice'
const Navbar = () => {

    const count = useSelector((state)=> state.app.user)

    const [searchdata, setSearchdata] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(searchUsers(searchdata))
    })
  return (
   <>
   <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div classNameName="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to ="/" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/read" className="nav-link">
                  Read Post
                </Link>
              </li>
              <li className="nav-item">
                <h5>User Count:{count.length}</h5>
              </li>
            </ul>
          </div>
          <input
           className="form-control "
            type="search"
            placeholder="Search"
            value={searchdata}
            onChange={(e)=> setSearchdata(e.target.value)}
          ></input>
        </div>
      </nav>
   </div>
      
   </>
  )
}

export default Navbar