import React from 'react';
import './App.css';
import Footer from './Footer';
// import moveSound from './integrations/chess-t.mp3';
// import {Howl,Howler} from 'howler';

import ValidationMove from './integrations/ValidationMove';

// const audioClips= [
// {sound: moveSound, label: 'chess'}
// ]
class App extends React.Component{


// soundPlay = (src) => {
// const sound = new Howl ({
// src: [moveSound]
// })
// sound.play();
// }
//
// renderButtonSound = () => {
//
// return (
// <button onClick = { () => this.soundPlay()}>
// Hey
// </button>
// )
//
// }
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
// {this.renderButtonSound()}
