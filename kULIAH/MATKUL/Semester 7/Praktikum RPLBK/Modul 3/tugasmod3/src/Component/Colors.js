import React, {useState} from 'react'

const MainPage = () => {
    const [changeColor, setChangeColor] =useState({
      color: "purple",
      background: "black"
    })
  
    // function for handleClick
    const handleClick = () => {
      if (changeColor.color === "purple"){
        setChangeColor({
          color: "green",
          background: "white"
        })
      }

      if (changeColor.color === "green"){
        setChangeColor({
          color: "purple",
          background:"black"
      })
      }
        
        
    }

  return (
    <React.Fragment>
    <section>
      <div className="h-screen centered">
          <button
          style={
            {
              color : changeColor.color,
              backgroundColor : changeColor.background
            }
          }
          onClick={handleClick}

          >click me</button>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage
