//gabriela cespedes
import { Component} from "react"
import PersonCard from "../PersonCard/PersonCard"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state para almacenar los datos de la persona
      personas: [
        {
          firstName: "Jane",
          lastName: "Doe", 
          age: 45, 
          hairColor:"Black",
        }, 
        {
          firstName: "John",
          lastName: "Smith", 
          age: 88, 
          hairColor:"Brown",
        }, 
        {
          firstName: "Millard",
          lastName: "Filmore", 
          age: 50, 
          hairColor:"Brown",
        },
        {
          firstName: "Maria",
          lastName: "Smith", 
          age: 62, 
          hairColor:"Brown",
        },],
    }
  }

  render() {
    return(
      <>
      {this.state.personas.map((persona) => {
        return (<PersonCard firstName = {persona.firstName} 
          lastName = {persona.lastName}
          age = {persona.age}
          hairColor = {persona.hairColor}/>)
      })
      }
      </>
    )
  }

}
//componente funcional 
//<PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
//Nota: podemos pasar una cadena con o sin llaves.


export default App
