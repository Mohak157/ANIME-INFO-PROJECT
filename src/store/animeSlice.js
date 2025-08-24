import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSeasonalAnime = createAsyncThunk(
  "anime/fetchSeasonalAnime",
  async ()=>{
    const response = await fetch("https://api.jikan.moe/v4/seasons/now?limit=10")
    const data = await response.json()
    return data.data
  }
)

const animeSlice = createSlice({
 name: "anime",
 initialState: {
   animeList: [],
   selectedAnime: null,
   loading: false,
   error: null
 },
 reducers:{
   setSelectedAnime: (state, action)=>{
     state.selectedAnime = action.payload
   }
 },
 extraReducers: (builder)=>{
   builder
     .addCase(fetchSeasonalAnime.pending,(state)=>{
       state.loading = true
       state.error = null
     })
     .addCase(fetchSeasonalAnime.fulfilled,(state,action)=>{
       state.loading = false
       state.animeList = action.payload
       state.selectedAnime = action.payload[0] || null
     })
     .addCase(fetchSeasonalAnime.rejected,(state,action)=>{
       state.loading = false
       state.error = action.error.message
     })
 }
})

export const { setSelectedAnime } = animeSlice.actions
export default animeSlice.reducer
