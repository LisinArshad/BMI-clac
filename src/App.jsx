import React,{useState} from 'react'
import './App.css'

function App() {

 let height=0
 let bmi=0
  let weight=0
  const [res,setRes]=useState(0)
  const [msg,setmsg]=useState("")

  const getheight=(e)=>{
    height=e.target.value
    console.log(height);
  }
  const getweight=(e)=>{
    weight=e.target.value
    console.log(weight);
    
  }
  const calculate=()=>{
    bmi=weight/(height*height)
    setRes(bmi.toPrecision(4))
 
    
    if (bmi<=18.5) {
      setmsg("Under Weight")
    }
    else if(bmi<=25 && bmi>18.5) {
      setmsg("Healthy Weight")
    }
    else if (bmi<=30 && bmi>25) {
      setmsg("Over Weight")
    }
    else {
     setmsg("Obese")
    }
   
   

}


  return (
    <>
    <h1 className='text-white text-center mt-5'>BODY MASS INDEX</h1>
  <div className='d-flex justify-content-center align-items-center' style={{height:"60vh",}}>
    <div className=' w-50 P-4 rounded' style={{boxShadow:"0 4px 8px 0 lightblue",backgroundColor:"gray"}}>
    <input type="number" onChange={(e)=>{getweight(e)}} className='form-control my-3 w-75 text-center' style={{marginLeft:"auto",marginRight:"auto"}} placeholder='Enter Your Weight (kg)' />
    <input type="number" onChange={(e)=>{getheight(e)}} className='form-control my-3 w-75 text-center' style={{marginLeft:"auto",marginRight:"auto"}} placeholder='Enter Your Height (m)' />
    <button className='btn btn-primary shadow d-grid mx-auto' onClick={calculate}>Calculate BMI</button>
   <div className='bg-success rounded w-50 mt-4 mb-2 p-2' style={{marginLeft:"auto",marginRight:"auto"}} >
      <h2 className='text-truncate text-center'>BMI:-{res}</h2>
      <h4 className='text-center'>Status:- {msg}</h4>
   </div>

    </div>

  </div>
    </>
  )
}

export default App
