import React, {useEffect, useState} from 'react'
import Axios from 'axios'

const App = () => {

  const [data, setData] = useState();

  const getData = async() => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App
