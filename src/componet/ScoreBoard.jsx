import React from 'react'

const ScoreBoard = ({userScore,compScore}) => {
  return (
    <div>
         <div className="scorebord" id="scorebord">
        <div className="score">
            <p id="userscore">{userScore}</p>
            <p>You</p>
        </div>
        <div className="score">
            <p id="compscore">{compScore}</p>
            <p>Comp</p>
        </div>
    </div>
    </div>
  )
}

export default ScoreBoard
