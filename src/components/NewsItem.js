import React from 'react'

const NewsItem =(props)=> {
  
  
     
        let {title ,description,imageUrl,newsUrl,author,date,source}=props
        return (
            <div className="container my-3">
               <div  className="card" style={{width: "18rem",height:"30rem"}}>
                 <div style={{diplay:'flex',justifyContent:'flex-end',position:'absolute',right:0}} >
               <span class="badge rounded-pill bg-danger">
    {source}
   
  </span>
  </div>
  <img src={imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}  </h5>
    <p  className="card-text">{description}...</p>
    <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
            </div>
        )
    }

export default NewsItem