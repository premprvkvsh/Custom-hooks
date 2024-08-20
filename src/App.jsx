import React, { useState, useEffect} from 'react';



function App() {
const [render, setRender] = useState(true);
  useEffect(()=>{
  setTimeout(() =>{
    setRender(false);

  },10000)
},[]);

return (
  <>
   {render ? <MyComponent /> : <div></div>}
  </>
)
}

function MyComponent() {
  useEffect(() => {
    console.error("component mounted");

    return ()  => {
      console.log("componment unmounted");
    };
  }, []);

  return <div>
    From inside my component
  </div>
}

export default App