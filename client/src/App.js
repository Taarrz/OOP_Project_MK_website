import React, { useState, useEffect } from "react";
function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      <div>
        
      </div>
      <div className="h-36 bg-red w-full overflow-hidden text-center p-4">
        <h1 className="text-white text-3xl font-prompt font-bold">Welcome to MK Online Delivery</h1>
      </div>
    </div>
  )
}

export default App