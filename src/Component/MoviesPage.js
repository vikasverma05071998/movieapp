import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchmovies } from '../reducerSlice'
import './movie.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
export default function MoviesPage() {
    const data = useSelector(state => state.movie)
    const [inputs,setInputs] = useState('')
    const [showPerPage,setShowPerPage] = useState(8)
    const [pagination,setPagination] = useState({
        start : 0,
        end:8
    })
    const onPaginationChange = (start,end) =>{
        setPagination({start:start,end:end})
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchmovies())
    }, [dispatch])
    const inputhandler = (e) => {
        setInputs(e.target.value)
    }
    return (
        <div>
            <div className='inputhandle'>
                <input type='text' placeholder='search movies' id='inputhandle' value={inputs} onChange={inputhandler} />
            </div>
            <h2 style={{ marginLeft: '50px', fontSize: '30px' }}>Trending</h2>
            <div className='movie'>
                {data?.movieData?.results?.filter((values) => {
                    if (inputs == '') {
                        return values
                    } else if (values.original_title.toLocaleLowerCase().includes(inputs.toLocaleLowerCase())) {
                        return values
                    }
                }).slice(pagination.start,pagination.end)
                    .map((val, index) => {
                        return (
                            <div key={index} className='containor'>
                                <Link to={`/DescriptionPage/${val.id}`}><img src={`https://image.tmdb.org/t/p/original/${val?.poster_path}`} alt="image" className='card'></img></Link><br />
                                {/* <div style={{backgroundColor:'grey'}}>  */}
                                <p className='name'>{val.original_title}</p>
                                <span className="fa fa-star" style={{ marginLeft: '100px', color: 'yellow' }} > {val.vote_average / 2}/5</span>
                                {/* </div> */}
                            </div>
                        )
                    })}
            </div>
           <Pagination showPerPage ={showPerPage} onPaginationChange = {onPaginationChange} total = {data?.movieData?.results?.length}/>
        </div>
    )
}