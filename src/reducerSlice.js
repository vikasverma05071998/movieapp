import { createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchmovies = createAsyncThunk('movie/fetchmovies',async()=>{
     let response  = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=29b9d662eda4cb4c2722b797b8673c36')
     return response.data
     
})

const reducerSlice = createSlice({
    name: 'movie',
    initialState: {
      movieData: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: {
      [fetchmovies.pending]: state => {
        state.loading = true
      }, 
      [fetchmovies.fulfilled]: (state, action) => {
        state.movieData = action.payload
        state.loading = false
        state.error = null
      },
      [fetchmovies.rejected]: (state, action) => {
        state.loading = false
        state.error = action.error
      }
    }
  })
  
  export default reducerSlice.reducer