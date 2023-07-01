import React, { useState, useEffect } from 'react'

/* Es una función que envuelve un component y retorna un nuevo componente */
const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0
        })

        useEffect(() => {
          const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
          }

          window.addEventListener("mousemove", handleMousePositionChange)
        
          return () => {
            window.removeEventListener("mousemove", handleMousePositionChange)
          }
        }, [])
        

        return (
            <WrappedComponent {...props} mousePosition={mousePosition} />
        )
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) return null 
    return (
        <div className='basicTracker'>
            <p>Mouse Position:</p>
            <div className='Row'>
                <p>x: {mousePosition.x}</p>
                <br></br>
                <p>y: {mousePosition.y}</p>
            </div>
        </div>
    )
}

const PointMouseLogger = ({mousePosition}) => {
    if(!mousePosition) return null
    return (
        <p>({mousePosition.x}, {mousePosition.y})</p>
    )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

const HocMouseOverPosition = () => {
  return (
    <div>
        <header>A HOC implementation example for mouse over position</header>
        <PanelMouseTracker />
        <PointMouseTracker />
    </div>
  )
}

export default HocMouseOverPosition