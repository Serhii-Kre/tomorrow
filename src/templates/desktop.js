import React from 'react'


function Desktop(props) {
 

         return (
         <section className='desktop'>
           {props.cats.map(({ id, height, url, width }) => (
            
             <div key={id} className='catBox'>
               <img src={url} alt={id} height={height} width={width} />
             </div>
           ))}
         </section>
        )

         
      
}



export default Desktop