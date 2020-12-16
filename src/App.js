import React from 'react';
import './App.css';
import Footer from './Footer';
import ValidationMove from './integrations/ValidationMove';

class App extends React.Component{

render(){
return(
<div className="home">
<div className= "heading">
<h1> Chess </h1>
</div>
<div className="chessB " >

<ValidationMove/>
</div>
<Footer/>
</div>

);
}
}


export default App;
