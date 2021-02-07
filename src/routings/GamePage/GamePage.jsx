import React from 'react'

const GamePage = ({onChangePage}) => {
    const handleOnClick = ()=> {

   onChangePage && onChangePage('app')
    }
    return (
        <div>
            <h1>Hello from Game Page...</h1>
            <button onClick={handleOnClick} >
                Back to home
            </button>
        </div>
    )
}

export default GamePage
