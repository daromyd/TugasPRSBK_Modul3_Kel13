import React, {Component} from "react"; 
 
class Ani extends Component {
    // tepat dibawah deklarasi class Child 
    constructor(props) {
        super(props);
          
        this.state = {
           header: "Tugas Modul 3",
           content: "kelompok 13"
        }
     }
     componentDidMount() {         
        alert(`3`)     
    }
     render() {
        return (
           <div>
              <h1>{this.state.header}</h1>
              <h2>{this.state.content}</h2>
           </div>
        );
     }
  }
 
export default Ani;