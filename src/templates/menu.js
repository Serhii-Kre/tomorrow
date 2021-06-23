import React from 'react'


function Menu({onCreate}) {
    

    function submitHandler(event) {
        event.preventDefault()
        onCreate(event.target.id)
        
    }

    return (
            <h2><span id="desktop" onClick={submitHandler}>Desktop</span> | <span id="mobile" onClick={submitHandler}>Mobile</span></h2>
    )

         
      
}



export default Menu


