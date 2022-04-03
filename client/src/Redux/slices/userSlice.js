import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {SignUp} from '../../Api/Api';





// CREATE
export const signUpAsync=createAsyncThunk('user/signUp',async(userData)=>{

  try{
    const data=await SignUp(userData);
    console.log(data);
    return data.data; 

  }catch(error){
      console.log(error);
  
  }


});





 
const UsertSlice = createSlice({
    name: 'user',
    initialState: {
      user: [],
    
      status: null,
    },
    reducers:{
      
    },
    extraReducers: {

     


      // CREATE
      [signUpAsync.pending]: (state, action) => {
        state.status = 'loading'
      },
      [signUpAsync.fulfilled]: (state, { payload }) => {
        state.user = payload;
        state.status = 'success';
      },
      [signUpAsync.rejected]: (state, action) => {
        state.status = 'failed'
      },


     


     



    },
  });




  




  // export const {

  //                } =productSlice.actions; 





//selectors
export const selectUser=(state)=>state.user;

export default UsertSlice.reducer;





