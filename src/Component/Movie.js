import React, { useEffect, useState } from 'react'
import './movie.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Movie() {
  const [data, setData] = useState([])
  const [inputs,setInputs] = useState('')
  const [page, setPages] = useState(1)
  const [noOfpages] = useState(8)
   
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=29b9d662eda4cb4c2722b797b8673c36')
    //  let response = await axios.get('https://developers.themoviedb.org/3/find/find-by-id')
      console.log(response.data)
      setData(response.data)

    }
    fetchData()
  },[])
  // const numofTotalPage = Math.ceil(data.length/noOfpages)
  // const pages = [...Array(numofTotalPage+1).keys()].slice(1)
  // const lastPageind = page*noOfpages
  // const firstPageind = lastPageind-noOfpages
  // const currentPost = data.slice(firstPageind,lastPageind)
  const inputhandler = (e) =>{
    setInputs(e.target.value)
 }
//  const nextHandler = () =>{
//        if(page !== 1){
//         setPages(page-1)
//        }
//  }
//  const prevHandler = () =>{
//   if(page !== numofTotalPage){
//     setPages(page+1)
//    }
//  }
  return (
    <div>
    <div className='inputhandle'>
        <input type='text' placeholder='search movies' id='inputhandle' value={inputs} onChange = {inputhandler}/>
    </div>
    <h2 style={{marginLeft:'50px', fontSize:'30px'}}>Trending</h2>
      <div className='movie'>
        {data?.results?.filter((values)=>{
              if(inputs == ''){
                return values
            }else if(values.original_title.toLocaleLowerCase().includes(inputs.toLocaleLowerCase())){
                return values
            }
        })
        .map((val, index) => {
          return (
            <div key={index} className='containor'>
              <Link to={`/View/${val.id}`}><img src={`https://image.tmdb.org/t/p/original/${val?.poster_path}`} alt="image" className='card'></img></Link><br/>
              {/* <div style={{backgroundColor:'grey'}}>  */}
              <p className='name'>{val.original_title}</p>
              <span className="fa fa-star" style={{marginLeft:'100px',color:'yellow'}} > {val.vote_average / 2}/5</span>
              {/* </div> */}
            </div>
          )
        })} 
       </div>
       {/* <div className='buttonn'>
        <button className='b1' onClick={nextHandler}>Prev</button>
        {pages.map(page=><span>{`${page}`}</span>)}
        <button className='b1' onClick={prevHandler}>Next</button>
       </div> */}
    </div>
  )
}