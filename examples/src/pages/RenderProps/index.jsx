import React from 'react'
import { useEffect, useState } from 'react'

const DataFetcher = ({ render, url }) => {
    const [data, setData] = useState([])

    useEffect(() => {
      if (url.includes("desserts")) {
        setData(["cake", "ice cream", "pie", "brownie"])
      } else {
        setData(["cake", "ice cream", "pie"])
      }
    }, [])
    
    return render(data)
}

const DessertCount = () => {
    return (
        <DataFetcher 
            url="https://littlerlemon/desserts" 
            render={(data) => <p>{data.length} desserts</p>}
        />
    )
}

const DrinksCount = () => {
    return (
        <DataFetcher 
            url="https://littlerlemon/drinks" 
            render={(data) => <p>{data.length} desserts</p>}
        />
    )
}

const RenderProps = () => {
  return (
    <div>
        <header>Render props pattern</header>
        <DessertCount />
        <DrinksCount />
    </div>
  )
}

export default RenderProps