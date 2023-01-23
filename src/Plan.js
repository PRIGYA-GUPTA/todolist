import React from 'react'

export default function Plan(props) {
  return (
    <>
    <div className='row'>
    <li className='shadow p-2 my-3 col-sm-8'>{props.value}</li>
    <button onClick={()=>{props.sendData(props.id)}}className='btn btn-danger my-2 col-sm-1 offset-1 '>X</button>
    </div>
    </>
  )
}
