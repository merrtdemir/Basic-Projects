import React from 'react'

function BurgerComponent({data}) {
  return (
   
  <div>
   <div className="card h-100 " style={{backgroundColor:"whitesmoke"}} >
  <img className="card-img-top h-100 " src={data.img} />
  <div className="card-body text-center ">
    <h5 className="card-title fw-bold fs-3  ">{data.title}</h5>
    <p className="card-text mt-auto fs-6">
      {data.text}
    </p>
    <a href="#" className="btn btn-warning mt-3">
      Detaylar
    </a>
  </div>
</div>

  </div>
  

  )
}

export default BurgerComponent
/* */