
import './App.css';
import amine from './amine.jpg' ;
import React, { Component } from 'react'
import Profil from './Profil'
 class App extends Component {
  
  state = {
    Person: {
      fullName: "Hamdi Med Amine",
      bio: "student at go my code",
      imgSrc: <img src={amine} alt=""></img>,
      profession: "full stuck js",
    },
    show: false,
    

  };
  

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="centre">
      
        {this.state.show && (
          <div>
            <Profil/>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <h1>{this.state.Person.profession}</h1>
            <div>{this.state.Person.imgSrc}</div>
            <br></br>
          </div>
        )}

        <button className="btn" onClick={this.handleShowPerson  } >hide/show</button>
      </div>
    )
  }
}
export default App