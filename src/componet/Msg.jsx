import React from 'react'

const Msg = ({msg,userchoice,compchoice,miStyle}) => {
  return (
    <div>
        <div className="msgcontainer" id="msgcontainer">
        <p id="msg" style={miStyle}>{msg}</p>

    </div>
    <div className="hidecontainer" id="hidecontainer">
        <p id="yourchoice" className="yourchoice">{userchoice}</p>
        <p id="compchoicee" className="compchoicee">{compchoice}</p>
        </div>
    </div>
  )
}

export default Msg
