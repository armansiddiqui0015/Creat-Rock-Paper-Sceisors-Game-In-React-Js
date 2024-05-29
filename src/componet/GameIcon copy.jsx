import React from 'react'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'


const GameIcon = ({ItemChoices,clickBtnToPlayGame}) => {
 let ImageItemChoices = {rock,paper,scissors}
  return (
    <div className="choices">
    {ItemChoices.map((item) => (
      <div className={item} id={item} key={item} onClick={() => clickBtnToPlayGame(item)}>
          <img src={ImageItemChoices[item]} alt={item} className={`img-${item}`}/>
      </div>
    ))}
    </div>
  )
}

export default GameIcon
