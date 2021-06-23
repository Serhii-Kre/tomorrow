import React, {useEffect} from "react";
import "./App.css";
import Loader from "./loader"
import Desktop from "./templates/desktop"
import Mobile from "./templates/mobile"
import Menu from "./templates/menu"

function App() {
  const [cats, setCats] = React.useState([])
  const [layout, setLayout] = React.useState('desktop')
  const [loading, setLoading] = React.useState(true)

  useEffect(()=> {
    fetch('https://api.thecatapi.com/v1/images/search?limit=30')
    .then(response => response.json())
    .then(cats => {
      setTimeout(() => {
        setCats(cats)
        setLoading(false)
      },2000)
      
    })
  }, [])

  
  function changeLayout(name) {
    setLayout(name)    
  }
  


  return (
    
    <div className="wrapper">
      <h1>Amazing Cats</h1>

      <Menu onCreate={changeLayout}/>

      {loading && <Loader />}

      {cats.length ? layout === 'desktop' ? <Desktop cats={cats} /> : <Mobile cats={cats} /> : 
        loading ? null :  <p>Sorry, There are no Cats for today</p>       
      }
      
  
    
  </div>  
  );
}

export default App;
