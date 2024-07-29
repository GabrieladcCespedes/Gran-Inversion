//gabriela cespedes
/**
 * Vuelve a hacer la tarea Prop It Up (Apóyalo) y convierte los componentes de clase en componentes funcionales.

Crea un componente llamado PersonCardque acepte las siguientes propiedades: 

firstName
lastName
age
hairColor
Luego, utilizando props, muestra cuatro componentes PersonCardque señalen a cuatro personas diferentes.
 */

//componente funcional 
import React from 'react';
const PersonCard = props => {    
    return(        
        <div>            
            <h2>{props.lastName}, {props.firstName}</h2>            
            <p>Age: {props.age}</p>            
            <p>Hair Color: {props.hairColor}</p>        
        </div>    
    );
}
export default PersonCard;
