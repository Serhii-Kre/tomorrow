import React from 'react'


function Mobile(props) {
 

         return (
         <section className='mobile'>
           {props.cats.map(({ id, height, url, width }) => (
            
             <div key={id} className='catBox'>
               <img src={url} alt={id} height={height} width={width} />
             </div>
           ))}
         </section>
        )

         
      
}



export default Mobile