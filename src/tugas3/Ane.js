const React = require('react')

class Ane extends React.Component {
    // tepat dibawah deklarasi class Child 
        constructor(props){
          super(props)
          this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)
        }
        handleChange(event) {
          this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
        }
        componentDidMount() {         
            alert(`2`)     
        } 
        render() {
          return (
            <div>
              <input type="file" onChange={this.handleChange}/>
              <img src={this.state.file}/>
            </div>
          );
        }
      }
      
 
export default Ane;