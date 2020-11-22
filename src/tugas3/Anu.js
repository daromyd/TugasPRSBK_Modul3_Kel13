import React, {Component} from "react"; 
 
class Anu extends Component {
    // tepat dibawah deklarasi class Child 
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }
    
      getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }
      componentDidMount() {         
        alert(`1`)     
      } 
    
      render() {
        return (
          <div class="date">
            <p> Date {this.state.date}</p>
          </div>
        );
      }
    }
 
export default Anu;