import { useState } from 'react';
import './App.css'
import GameIcon from './componet/GameIcon';
import Msg from './componet/Msg';
import ScoreBoard from './componet/ScoreBoard';
import Header from './componet/header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userScore,setuserScore] = useState(0)
  const [compScore,setcompScore] = useState(0)
  const [msg,setmsg] = useState('Play Your Game')
  const [userchoice,setuserchoice] = useState('your choice :- ')
  const [compchoice,setcompchoice] = useState('comp choice :- ')
  const [miStyle, setmiStyle] = useState({
    color: 'white',
  backgroundColor: '#333',
  fontSize: '2rem',
  display: 'inline',
  padding: '1rem',
  borderRadius: '1rem',
  fontFamily: 'cursive'

  })


 let ItemChoices = ['rock','paper','scissors']
 let clickBtnToPlayGame = (item) =>{
   let computerChoice = autoGenCompChoice();
   setuserchoice(`User Choice :- ${item}`)
   setcompchoice(`Comp Choice :- ${computerChoice}`)
  
   if(item === computerChoice){
    setmsg('Game Is Draw')
    setmiStyle({
      color: 'white',
      backgroundColor: '#D2691E',
      fontSize: '2rem',
      display: 'inline',
      padding: '1rem',
      borderRadius: '1rem',
      fontFamily: 'cursive'

     })
  
   }
   else
   
   {
   let userWin = true

    if (item === 'rock'){
        userWin = computerChoice === 'paper' ? false :true
   }
   else if ( item === 'paper'){
    userWin = computerChoice === 'scissors' ? false : true
   }
   else if( item === 'scissors'){
    userWin = computerChoice === 'rock' ? false : true
   }
  
  if (userWin){
    setmsg('You Win!')
    setuserScore(userScore+1)
    setmiStyle({
      color: 'white',
      backgroundColor: 'green',
      fontSize: '2rem',
      display: 'inline',
      padding: '1rem',
      borderRadius: '1rem',
      fontFamily: 'cursive'
      
     })
  
  }
  else{
    setmsg('You Lose!!!!!')
    setcompScore(compScore+1)
    setmiStyle({
      color: 'white',
      backgroundColor: 'red',
      fontSize: '2rem',
      display: 'inline',
      padding: '1rem',
      borderRadius: '1rem',
      fontFamily: 'cursive'
     })
  
  }
}
 }
 let autoGenCompChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3)
  return ItemChoices[randomIndex];
 } 
      
  return (
      <div>
     <Header />
     <GameIcon ItemChoices={ItemChoices} clickBtnToPlayGame={clickBtnToPlayGame}/>
     <ScoreBoard userScore={userScore} compScore={compScore} />
     <Msg msg={msg} userchoice={userchoice} compchoice={compchoice} miStyle={miStyle} />
       </div>
  )
}

export default App
