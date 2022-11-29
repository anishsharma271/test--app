import React from 'react'

 const Banner=(props)=> {
  return (
    <div className="inner">
    <div className="card" style={{width: "18rem"}}>

   {/* <div className="card"> */}
    
   <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.info}</p>
      <a href={props.myurl} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
  )
}
export default Banner;