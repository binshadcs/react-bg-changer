import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BgChanger />
    </>
  )
}

function BgChanger() {
  const [color, setColor ] = useState("bg-white-400");
  console.log(color)
  // const buttons = [{
  //   name : "Red",
  //   color : "bg-red-400",
  //   bg : "",
  //   hoverBg : ""
  // }, {
  //   name : "Yellow",
  //   color : "bg-yellow-400"
  // }, {
  //   name : "Black", 
  //   color : "bg-gray-700"
  // }, {
  //   name : "Purple",
  //   color : "bg-purple-400"
  // }]
  return (
      <div className={`w-screen h-screen ${color} flex justify-center items-end`}>
          <div className='rounded-md shadow-lg bg-white p-4 mb-5 text-white'>
            <button className='rounded-md bg-red-400 py-1 px-3 mx-2 hover:shadow-lg hover:bg-red-500' onClick={()=> {
              setColor("bg-red-400")
            }}> Red </button>

            <button className='rounded-md bg-yellow-400 py-1 px-3 mr-2 hover:shadow-lg hover:bg-yellow-500' onClick={()=> {
              setColor("bg-yellow-400")
            }}> Yellow </button>

            <button className='rounded-md bg-gray-700 py-1 px-3 mr-2 hover:shadow-lg hover:bg-gray-800' onClick={()=> {
              setColor("bg-gray-700")
            }}> Black </button>

            <button className='rounded-md bg-purple-400 py-1 px-3 mr-2 hover:shadow-lg hover:bg-purple-500' onClick={()=> {
              setColor("bg-purple-400")
            }}> Purple </button>

            <button className='rounded-md bg-green-400 py-1 px-3 mr-2 hover:shadow-lg hover:bg-green-500' onClick={()=> {
              setColor("bg-green-400")
            }}> Green </button>

            <button className='rounded-md bg-blue-400 py-1 px-3 mr-2 hover:shadow-lg hover:bg-blue-500' onClick={()=> {
              setColor("bg-blue-400")
            }}> Blue </button>

            <button className='rounded-md bg-teal-400 py-1 px-3 mr-2 hover:shadow-lg hover:bg-teal-500' onClick={()=> {
              setColor("bg-white-400")
            }}> Defualt </button>

          </div>
      </div>
  )
}

export default App
