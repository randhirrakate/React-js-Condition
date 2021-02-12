
import React, {useState} from 'react';
import './Randhir.css';
function App() {

  const[my_condition,changeMyCondition]=useState(false)


  let MyDiv = '';
  
    const showMyDiv = () =>
    {
      changeMyCondition(true);
    }
    const hideMyDiv = () =>
    {
      changeMyCondition(false);
    }

  if(my_condition)
  {
    MyDiv = (
    <div className="MyDiv">
      <h5>Current Status : {my_condition}</h5>
    </div>
    );
  }
else
{


}

  return (
    <div>
        <button className="myButton" onClick={showMyDiv}> Show Div </button>
        <button className="myButton" onClick={hideMyDiv}> Hide Div </button>

        {MyDiv}
        
    </div>
  );
}

export default App;
