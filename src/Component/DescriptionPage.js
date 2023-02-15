import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchmovies } from '../reducerSlice'

import './view.css'
export default function DescriptionPage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchmovies())
    },[dispatch])
    const movieDatas = useSelector((state) => state.movie)
    console.log(movieDatas.movieData,'hiyr')
    const parems = useParams()
    const movieDescription = movieDatas?.movieData?.results?.find( (item) => item.id === parseInt(parems.id))  
    console.log(movieDescription,'des')
    
    return (
        <div className='parent'>
          <div>
           <img src={`https://image.tmdb.org/t/p/original/${movieDescription?.backdrop_path}`} className='viewimage' />
          </div> 
        <div className='descroption'>
        <h2>{movieDescription?.title}</h2>
        <h3 id='star'><span className="fa fa-star" style={{ marginLeft: '100px', color: 'yellow' }}></span> {movieDescription?.vote_average / 2}/5 </h3>
        <h3>Release Date <span>{movieDescription?.release_date}</span></h3>
        <h3>Original language {movieDescription?.original_language}glish</h3>
  
        <p>{movieDescription?.overview}</p>
      </div>
        </div>
      )
    }