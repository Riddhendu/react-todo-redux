import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
///create operation//
export const createUser = createAsyncThunk("createUser", async(data,{rejectWithValue})=>{
      const response = await fetch('https://64c4a2a067cfdca3b660de15.mockapi.io/crud',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
      })
      try {
         const result = await response.json()
         return result
      } catch (error) {
        rejectWithValue(error)
      } 
})

//read operation//

export const getUser = createAsyncThunk("getUser", async(data,{rejectWithValue})=>{
    const response = await fetch('https://64c4a2a067cfdca3b660de15.mockapi.io/crud')
    try {
       const result = await response.json()
       console.log('result========>',result)
       return result
    } catch (error) {
        rejectWithValue(error)
    } 
})

//delete operation //

export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await fetch(`https://64c4a2a067cfdca3b660de15.mockapi.io/crud/${id}`,{
      method:'DELETE',
      
      
    })
    try {
       const result = await response.json()
       return result
    } catch (error) {
      rejectWithValue(error)
    } 
})

// Update operation //


export const updateUser = createAsyncThunk("updateUser", async(data,{rejectWithValue})=>{
    const response = await fetch(`https://64c4a2a067cfdca3b660de15.mockapi.io/crud/${data.id}`,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data),
    })
    try {
       const result = await response.json()
       return result
    } catch (error) {
      rejectWithValue(error)
    } 
})

export const userDetail = createSlice({
    name:'userDetail',
    initialState:{
        user:[],
        loading:false,
        error:null,
        searchData:[]
    },
    reducers:{
         searchUsers:(state,action)=>{
            state.searchData = action.payload
         }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const {id} = action.payload
                if(id){
                    state.user = state.user.filter((data)=> data.id !== id)
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
               state.user = state.user.map((data)=> data.id === action.payload.id ? action.payload : data)
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
})

export const { searchUsers } = userDetail.actions;
export default userDetail.reducer